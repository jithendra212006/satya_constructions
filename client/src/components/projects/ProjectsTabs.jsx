"use client";

import { useState } from "react";
import ProjectsGrid from "./ProjectsGrid";

const tabs = [
  {
    key: "ongoing",
    label: "Ongoing",
  },
  {
    key: "upcoming",
    label: "Upcoming",
  },
  {
    key: "completed",
    label: "Completed",
  },
  {
    key: "sold_out",
    label: "Sold Out",
  },
];

export default function ProjectsTabs() {
  const [activeTab, setActiveTab] = useState("ongoing");

  return (
    <>
      {/* Tabs */}
      <section className="sticky top-20 z-30 bg-rich-black border-b border-white/10 pt-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex gap-2 md:gap-6 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`
                  px-2 sm:px-4 md:px-5
                  py-4
                  text-[11px] sm:text-xs md:text-lg
                  uppercase
                  tracking-[0.1em] md:tracking-[0.25em]
                  whitespace-nowrap
                  border-b-2
                  transition-all
                  duration-300
                  ${
                    activeTab === tab.key
                      ? "border-violet-400 text-violet-400"
                      : "border-transparent text-white/50 hover:text-white"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <ProjectsGrid activeTab={activeTab} />
    </>
  );
}
