import { Users, Target, Rocket } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            About Us
          </h1>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Building modern web experiences with React,
            Tailwind CSS, Zustand and cutting-edge technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <Users className="mb-4" size={40} />
            <h3 className="text-2xl font-semibold mb-3">
              Our Team
            </h3>
            <p className="text-zinc-400">
              Passionate developers creating modern and
              scalable applications.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <Target className="mb-4" size={40} />
            <h3 className="text-2xl font-semibold mb-3">
              Our Mission
            </h3>
            <p className="text-zinc-400">
              Delivering fast, beautiful and user-friendly
              digital experiences.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <Rocket className="mb-4" size={40} />
            <h3 className="text-2xl font-semibold mb-3">
              Innovation
            </h3>
            <p className="text-zinc-400">
              Continuously learning and adopting modern
              technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}