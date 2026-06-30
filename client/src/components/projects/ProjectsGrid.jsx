"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ activeTab }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects from your backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter based on activeTab
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.status === activeTab);

  if (loading) {
    return (
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto text-center text-white/50">
          Loading projects...
        </div>
      </section>
    );
  }

  if (filteredProjects.length === 0) {
    return (
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/50 text-lg">
            No projects found in this category.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-14 lg:py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            // Use project._id instead of project.id since it's from MongoDB
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
