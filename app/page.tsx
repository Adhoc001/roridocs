"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ClipboardList, Folder, Menu } from "lucide-react";

const projects = [
  "Project 0",
  "Projects 1",
  "Projects 2",
  "Projects 3",
  "Projects 4",
];

const runbooks = [
  "Runbook 001",
  "Runbook 002",
  "Runbook 003",
  "Runbook 00Y",
  "Runbook 0ZX",
  "Runbook 00X",
];

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeProject, setActiveProject] = useState(projects[0]);

  useEffect(() => {
    const checkScreenSize = () => {
      setCollapsed(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,rgba(120,119,198,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(91,33,182,0.18),transparent_35%),linear-gradient(180deg,#02040a_0%,#050816_35%,#090d18_100%)] text-white">
      <div className="flex min-h-screen gap-4 p-4 sm:gap-5 sm:p-6">
        {/* Sidebar */}
        <aside
          className={`shrink-0 rounded-[28px] border border-white/10 bg-white/[0.035] p-4 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-300 ${
            collapsed ? "w-28" : "w-64"
          }`}
        >
          {/* Header */}
          <div
            className={`mb-10 flex items-center pt-2 ${
              collapsed ? "justify-center" : "justify-between"
            }`}
          >
            {!collapsed && (
              <button
                onClick={() => {
                  setActiveProject(projects[0]);
                  setCollapsed(window.innerWidth < 1024);
                }}
                className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg"
              >
                <Image
                  src="/logo.png"
                  alt="Home logo"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </button>
            )}

            <button
              onClick={() => setCollapsed(!collapsed)}
              className="rounded-2xl border border-white/10          p-3 text-white/70 backdrop-blur-xl transition hover:bg-white/8 hover:text-white"
            >
              <Menu size={22} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-4">
            {projects.map((project) => (
              <button
                key={project}
                onClick={() => setActiveProject(project)}
                className={`flex w-full items-center rounded-2xl py-4 text-sm font-medium transition-all ${
                  collapsed ? "justify-center px-0" : "gap-3 px-4 text-left"
                } ${
                  activeProject === project
                    ? "border border-violet-400/30 bg-violet-500/20 text-white shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                    : "text-white/75 hover:bg-white/6"
                }`}
              >
                <Folder size={22} className="shrink-0" />
                {!collapsed && <span className="truncate">{project}</span>}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <section className="min-w-0 flex-1 rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-8 lg:p-10">
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {activeProject}
            </h2>
            <p className="mt-2 text-white/60">
              All contents here are for {activeProject} only.
            </p>
          </div>

          {/* Runbooks */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {runbooks.map((runbook) => (
              <div
                key={`${activeProject}-${runbook}`}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-[28px] transition-all duration-300 hover:-translate-y-1 hover:border-white/20     "
              >
                {/* Glass Reflection */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.02)_40%,transparent_100%)] opacity-80" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/80 shadow-lg shadow-violet-500/20">
                    <ClipboardList size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-semibold sm:text-2xl">
                    {runbook}
                  </h3>

                  {/* Description */}
                  <p className="leading-relaxed text-white/60">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}