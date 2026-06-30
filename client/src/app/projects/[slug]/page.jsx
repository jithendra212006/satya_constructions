"use client"; // We use client components for fetching data on load
import { useEffect, useState } from "react";
import ProjectHero from "@/components/project-details/ProjectHero";
import ProjectSpecs from "@/components/project-details/ProjectSpecs";
import ProjectOverview from "@/components/project-details/ProjectOverview";
import ProjectAmenities from "@/components/project-details/ProjectAmenities";
import ProjectGallery from "@/components/project-details/ProjectGallery";
import ProjectCTA from "@/components/project-details/ProjectCTA";
import ProjectLocation from "@/components/project-details/ProjectLocation";

export default function ProjectDetailsPage({ params }) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the specific project using the slug from params
    const fetchProject = async () => {
      try {
        const { slug } = await params;
        const response = await fetch(
          `http://localhost:5000/api/projects?slug=${slug}`,
        );
        const data = await response.json();

        // Since your API returns an array, we find the specific project
        const found = Array.isArray(data)
          ? data.find((p) => p.slug === slug)
          : data;
        setProject(found);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [params]);

  if (loading)
    return (
      <main className="min-h-screen bg-rich-black flex items-center justify-center">
        Loading...
      </main>
    );

  if (!project)
    return (
      <main className="min-h-screen bg-rich-black flex items-center justify-center text-3xl">
        Project Not Found
      </main>
    );

  return (
    <main className="bg-rich-black text-white overflow-hidden">
      <ProjectHero project={project} />
      <ProjectSpecs project={project} />
      <ProjectOverview project={project} />
      <ProjectAmenities project={project} />
      <ProjectGallery project={project} />
      <ProjectLocation project={project} />
      <ProjectCTA />
    </main>
  );
}
