import {

  ExternalLink,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    title: "Smart Farming AI",
    description:
      "AI-powered agriculture assistant with crop recommendation, disease detection, weather forecasting and multilingual support.",

    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",

    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Gemini AI",
    ],

    github: "#",
    live: "#",

    featured: true,
  },

  {
    title: "E-Commerce Platform",

    description:
      "Modern shopping platform with authentication, payments and admin dashboard.",

    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4",

    tech: [
      "React",
      "Express",
      "MongoDB",
    ],

    github: "#",
    live: "#",
  },

  {
    title: "Portfolio Website",

    description:
      "Developer portfolio with animations, dark mode and responsive design.",

    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",

    tech: [
      "React",
      "Tailwind",
      "Framer Motion",
    ],

    github: "#",
    live: "#",
  },
];

export default function DynamicRout_Projects() {
  const featuredProject =
    projects.find(
      (project) => project.featured
    );

  const otherProjects =
    projects.filter(
      (project) => !project.featured
    );

  return (
    <section className="bg-gradient-to-b from-black via-zinc-950 to-black py-24 text-white">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mb-16 text-center">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-sm text-violet-400">
            My Work
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            A collection of projects showcasing
            modern frontend, backend and AI
            development skills.
          </p>
        </div>

        {/* Stats */}

        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
            <h3 className="text-4xl font-bold">
              15+
            </h3>

            <p className="mt-2 text-zinc-400">
              Projects
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
            <h3 className="text-4xl font-bold">
              100+
            </h3>

            <p className="mt-2 text-zinc-400">
              DSA Problems
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
            <h3 className="text-4xl font-bold">
              20+
            </h3>

            <p className="mt-2 text-zinc-400">
              Technologies
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
            <h3 className="text-4xl font-bold">
              2+
            </h3>

            <p className="mt-2 text-zinc-400">
              Years Learning
            </p>
          </div>

        </div>

        {/* Featured Project */}

        <div className="mb-16 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

          <div className="grid lg:grid-cols-2">

            <div>
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-10">

              <span className="text-violet-400">
                Featured Project
              </span>

              <h3 className="mt-4 text-4xl font-bold">
                {featuredProject.title}
              </h3>

              <p className="mt-5 leading-relaxed text-zinc-400">
                {featuredProject.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                {featuredProject.tech.map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/10 px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  )
                )}

              </div>

              <div className="mt-8 flex gap-4">

                <a
                  href={featuredProject.github}
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 transition hover:bg-white/10"
                >
                  GitHub
                </a>

                <a
                  href={featuredProject.live}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Project Cards */}

        <div className="grid gap-8 md:grid-cols-2">

          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/30"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                  {project.tech.map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/10 px-3 py-1 text-sm"
                      >
                        {tech}
                      </span>
                    )
                  )}

                </div>

                <div className="mt-6 flex gap-3">

                  <a
                    href={project.github}
                    className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 hover:bg-white/10"
                  >
                  </a>

                  <a
                    href={project.live}
                    className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2"
                  >
                    <ExternalLink size={18} />
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* CTA */}

        <div className="mt-20 text-center">

          <h3 className="text-4xl font-bold">
            Want to See More?
          </h3>

          <p className="mt-3 text-zinc-400">
            Explore all repositories and
            detailed project case studies.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 font-semibold">

            View All Projects

            <ArrowRight size={20} />

          </button>

        </div>

      </div>

    </section>
  );
}