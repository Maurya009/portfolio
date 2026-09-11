import { NextRequest, NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const SYSTEM_PROMPT = `
You are an AI assistant embedded in ${profile.name}'s personal portfolio website.

You represent ${profile.name} and answer visitor questions about his skills,
education, work experience, projects, and background.

Speak in a friendly, professional and concise way.
Keep answers short (2-4 sentences) unless the visitor asks for more detail.
Speak in first person as if representing ${profile.name}.

If asked directly whether you are AI, clearly say that you are ${profile.name}'s
AI portfolio assistant.

If a question is unrelated to ${profile.name}'s portfolio, politely explain that
you are only configured to answer questions about his professional background.

--- PROFILE ---
Name: ${profile.name}
Role: ${profile.role}
About: ${profile.about}
Skills: ${profile.skills.join(", ")}

--- WORK EXPERIENCE ---
${profile.workExperience
  .map(
    (w) =>
      `- ${w.title} at ${w.company} (${w.period}): ${w.points.join(" ")}`
  )
  .join("\n")}

--- EDUCATION ---
${profile.education
  .map((e) => `- ${e.degree}, ${e.institution} (${e.period})`)
  .join("\n")}

--- PROJECTS ---
${projects
  .map(
    (p) =>
      `- ${p.title} (${p.year}): ${p.summary}
Tech: ${p.techStack.join(", ")}`
  )
  .join("\n")}
`.trim();

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "GEMINI_API_KEY is not configured on the server." },
      { status: 500 }
    );
  }

  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "messages array required" },
        { status: 400 }
      );
    }

    const recent = messages.slice(-10);

    const contents = [
      {
        role: "user",
        parts: [
          {
            text: `${SYSTEM_PROMPT}

Now answer the visitor's question based only on the portfolio information above.`,
          },
        ],
      },
      ...recent.map(
        (m: { role: "user" | "assistant"; content: string }) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        })
      ),
    ];

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`;
    const requestBody = JSON.stringify({
      contents,
      generationConfig: {
        maxOutputTokens: 300,
        temperature: 0.6,
      },
    });

    async function callGemini() {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000); // 15s max

      try {
        return await fetch(geminiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: requestBody,
          signal: controller.signal,
        });
      } finally {
        clearTimeout(timeout);
      }
    }

    let response = await callGemini();

    // Gemini is momentarily overloaded — retry once after a short delay.
    if (response.status === 503) {
      await new Promise((r) => setTimeout(r, 1000));
      response = await callGemini();
    }

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Gemini API error:", errorData);

      const isOverloaded = response.status === 503;
      return NextResponse.json(
        {
          error: isOverloaded
            ? "The AI is a bit busy right now — please try again in a moment."
            : "Gemini API request failed.",
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "Sorry, I couldn't generate a reply.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);

    const timedOut = err instanceof Error && err.name === "AbortError";
    return NextResponse.json(
      {
        error: timedOut
          ? "The AI took too long to respond. Please try again."
          : "Failed to get a response.",
      },
      { status: 500 }
    );
  }
}