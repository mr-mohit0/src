import { Users, Target, Rocket } from "lucide-react";
import { useNavigate, Outlet,useLoaderData } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function HoverCardDemo() {
  const navigate = useNavigate();
  return (
    <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button
          className="
            mt-5
            rounded-md
            border border-white/10
            bg-white/5
            px-7 py-5
            text-[16px]
            text-white
            backdrop-blur-xl
            transition-all duration-300
            hover:bg-white/10
          "
          variant="link"
        >
          More
        </Button>
      </HoverCardTrigger>

      <HoverCardContent
        className="
          flex
          w-32
          flex-col
          gap-2
          rounded-xl
          border border-white/10
          bg-gradient-to-br
          from-black/90
          via-zinc-950/90
          to-black/90
          p-2
          text-white
          backdrop-blur-xl
        "
      >
        <button
          className="
            rounded-md
            border border-white/10
            bg-white/5
            px-3 py-2
            transition-all duration-200
            hover:bg-white/10
            hover:border-white/20
          "
          onClick={() => navigate("team")}
        >
          Team
        </button>

        <button
          className="
            rounded-md
            border border-white/10
            bg-white/5
            px-3 py-2
            transition-all duration-200
            hover:bg-white/10
            hover:border-white/20
          "
          onClick={() => navigate("company")}
        >
          Company
        </button>
        <button
          className="
            rounded-md
            border border-white/10
            bg-white/5
            px-3 py-2
            transition-all duration-200
            hover:bg-white/10
            hover:border-white/20
          "
          onClick={() => navigate("/gallary")}
        >
          Gallary
        </button>
      </HoverCardContent>
    </HoverCard>
  );
}

export default function About() {
  const navigate = useNavigate();
 

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            About Us
          </h1>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Building modern web experiences with React,
            Tailwind CSS, Zustand and cutting-edge
            technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="
              rounded-3xl
              border border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
              transition-all duration-300
              hover:-translate-y-1
              hover:border-white/20
              hover:bg-white/[0.07]
            "
          >
            <Users className="mb-4" size={40} />
            <h3 className="text-2xl font-semibold mb-3">
              Our Team
            </h3>
            <p className="text-zinc-400">
              Passionate developers creating modern
              and scalable applications.
            </p>
          </div>

          <div
            className="
              rounded-3xl
              border border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
              transition-all duration-300
              hover:-translate-y-1
              hover:border-white/20
              hover:bg-white/[0.07]
            "
          >
            <Target className="mb-4" size={40} />
            <h3 className="text-2xl font-semibold mb-3">
              Our Mission
            </h3>
            <p className="text-zinc-400">
              Delivering fast, beautiful and
              user-friendly digital experiences.
            </p>
          </div>

          <div
            className="
              rounded-3xl
              border border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
              transition-all duration-300
              hover:-translate-y-1
              hover:border-white/20
              hover:bg-white/[0.07]
            "
          >
            <Rocket className="mb-4" size={40} />
            <h3 className="text-2xl font-semibold mb-3">
              Innovation
            </h3>
            <p className="text-zinc-400">
              Continuously learning and adopting
              modern technologies.
            </p>
          </div>
        </div>

        <div className="mt-5 inline mr-3">
          <button
            className="
              rounded-md
              border border-white/10
              bg-white/5
              px-7 py-2
              backdrop-blur-xl
              transition-all duration-300
              hover:bg-white/10
            "
            onClick={() => navigate("/Projects")}
          >
            Projects
          </button>
        </div>
         <HoverCardDemo />

        <div className="mt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}