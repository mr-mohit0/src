import { ExternalLink } from "lucide-react";
import { globalStorage2 } from "./zustand";
import { useNavigate } from "react-router-dom";
export default function ProjectsSection() {
  const projects = globalStorage2((state) => { return state.projects });
  const navigate = useNavigate();
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-black via-zinc-950 to-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-sm text-violet-400">
            Portfolio
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            A collection of projects showcasing modern web
            development, backend architecture, and AI integration.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              onClick={()=>{navigate('/projects/id')}}
              key={index}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/30"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/10 px-3 py-1 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm transition hover:bg-white/10"
                  >
                    {/* <Github size={18} /> */}
                    Code
                  </a>

                  <a
                    href={project.live}
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-medium transition hover:scale-105"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="rounded-2xl border border-violet-500/30 bg-violet-500/10 px-8 py-3 font-medium text-violet-300 transition hover:bg-violet-500/20">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}