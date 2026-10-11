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
      "A full-stack vehicle booking platform that allows users to explore vehicles, make bookings, and manage their rides.",
    about:
      "Rydex is a full-stack vehicle booking platform with user authentication, vehicle bookings, role-based functionality, REST APIs, and MongoDB integration.",
    keyFeatures: [
      "User registration and secure authentication",
      "Browse vehicles and view vehicle details",
      "Vehicle booking and booking management",
      "Admin and vendor role-based functionality",
      "Responsive user interface",
      "Backend APIs with MongoDB integration",
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
  {
    slug: "ym-realty",
    title: "YM Realty — Real Estate Platform",
    year: "2026",
    summary:
      "A real estate platform featuring property listings and an admin dashboard for property management.",
    about:
      "YM Realty is a real estate web application that helps visitors explore property listings and provides an admin dashboard to manage properties.",
    keyFeatures: [
      "Property listings and property details",
      "Admin dashboard for property management",
      "MongoDB database integration",
      "Property image and media support",
      "Responsive user interface",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Cloudinary",
      "Node.js",
      "Express.js",
    ],
    coverImage: "",
    liveUrl: "https://propertyhub-ten.vercel.app/",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
