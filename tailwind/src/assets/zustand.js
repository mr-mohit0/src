import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const stor = (set, get, api) => {
  /// kuch cheeje yaha bhi kar sakte he ;
  // console.log(api)
  return {
    count: 0,
    increment: () => {
      set((state) => {
        return { count: state.count + 1 };
      });
      console.log(api);
    },
    decrement: () => {
      set((state) => {
        return { count: state.count - 1 };
      });
    },
    reset: () => {
      set((state) => {
        return { count: (state.count = 0) };
      });
    },
    incrementFiveTimes: () => {
      const { increment } = get();

      increment();
      increment();
      increment();
      increment();
      increment();
    },
    imagePageState: 1,
    increment1: () => {
      set((state) => {
        return { imagePageState: state.imagePageState + 1 };
      });
    },
    decrement1: () => {
      set((state) => {
        return { imagePageState: state.imagePageState - 1 };
      });
    },
    themeToggle: true,
    themToggleFunc: (val) => {
      set((state) => {
        return { themeToggle: (state.themeToggle = val) };
      });
    },
  };
};
const stor2 = (set, get, api) => {
  return {
    projects: [
      {
        title: "Smart Farming AI",
        apikey: ["Smart-Farming-AI", "Smart-Farming", "Farming-AI"],
        description:
          "AI-powered agriculture assistant providing crop recommendations, disease detection, weather insights, and multilingual support.",

        image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",

        tech: ["React", "Node.js", "MongoDB", "Gemini AI"],

        github: "#",
        live: "#",
      },

      {
        title: "E-Commerce Platform",
        description:
          "Modern shopping platform with authentication, cart management, payments, and admin dashboard.",

        image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",

        tech: ["React", "Redux", "Express", "MongoDB"],

        github: "#",
        live: "#",
      },

      {
        title: "Portfolio Website",
        description:
          "Responsive developer portfolio with animations, theme switching, and project showcase.",

        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",

        tech: ["React", "Tailwind", "Framer Motion"],

        github: "#",
        live: "#",
      },
    ],
  };
};
export const globalStorage = create(
  devtools(persist(stor, { name: "counterdata" })),
);
export const globalStorage2 = create(
  devtools(persist(stor2, { name: "storage2" })),
);
