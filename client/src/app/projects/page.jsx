import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsTabs from "@/components/projects/ProjectsTabs";

export const metadata = {
  title: "Projects | Satya Constructions",
  description:
    "Explore our portfolio of residential, commercial, and luxury developments across Vijayawada.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-rich-black">
      <ProjectsHero />
      <ProjectsTabs />
    </main>
  );
}
