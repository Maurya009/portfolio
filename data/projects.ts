export type Project = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  about: string;
  keyFeatures: string[];
  techStack: string[];
  coverImage?: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "rydex",
    title: "Rydex — Vehicle Booking Platform",
    year: "2025",
    summary:
      "A full-stack vehicle booking platform that allows users to explore vehicles, make bookings, and manage their rides through a modern web application.",

    about: `Rydex is a full-stack vehicle booking platform designed to make
vehicle rentals simple and convenient. The application provides a smooth
booking experience for users while allowing vendors and administrators
to manage vehicles, bookings, and platform operations.

I worked on the frontend and backend development using the MERN stack,
including authentication, REST APIs, database integration, and responsive
user interfaces.`,

    keyFeatures: [
      "User registration and secure authentication",
      "Browse available vehicles and view vehicle details",
      "Vehicle booking and booking management",
      "Admin and vendor role-based functionality",
      "Responsive interface for desktop and mobile devices",
      "Backend APIs with MongoDB database integration",
    ],

    techStack: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "JWT",
      "REST APIs",
    ],

    coverImage: "",
    liveUrl: "https://rydex-fawn.vercel.app",
    repoUrl: "https://github.com/Maurya009/rydex",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}