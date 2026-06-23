import Dilog from "../components/ui/Dilog";
import { InputForm } from "./Shadcnform";
import { PremiumCard } from "./FramerMotion";
import { FormValidation } from "./FormValidation";
import React_19_Features from "./React_19_Features";
import { Suspense, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { globalStorage } from "./zustand";
import { Link, NavLink, Routes } from "react-router-dom";
const Card = () => {
  const thems = globalStorage((e) => { return e.themeToggle });
  const [them, setThem] = useState(thems);
  const them2 = globalStorage((e)=>{return e.themToggleFunc})
  return (<>
    
    <div
      className={
        them
          ? "min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8"
          : "min-h-screen  from-black via-zinc-950 to-black text-white p-8"
      }
    >
      <span>
        {them ? (
          <Sun
            className="size-10"
            onClick={() => {
              setThem(false);
              them2(false);
            }}
          ></Sun>
        ) : (
          <Moon
            className="size-10"
            onClick={() => {
              setThem(true);
              them2(true);
            }}
          ></Moon>
        )}
      </span>
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Tailwind React
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your project is now set up with Tailwind CSS, shadcn/ui components,
          and everything is working!
        </p>
      </div>

      {/* Navigation */}
      <nav
        className={
          window.outerWidth <= 320
            ? "grid grid-cols-2 gap-3.5"
            : "flex justify-center space-x-4 mb-12"
        }
      >
        <a
          href="https://youtu.be/BouH1UmDabE?si=NNBdowd98W9scIYj"
          target="blank"
          className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition"
        >
          DSA
        </a>
        <a
          href="https://youtu.be/M9O5AjEFzKw?si=jERgTQAwjPCadb9F" target="blank"
          className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition"
        >
          dev
        </a>
        <Link
         to ="/Projects"
          className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition"
        >
          Projects
        </Link>
        <NavLink
          to="/posts"
          className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition"
        >
          Reports
        </NavLink>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-12 mb-12">
          <h2 className="text-[1.8rem] font-bold text-gray-900 mb-4">
            🎉 Setup Complete!
          </h2>
          <p className="text-gray-600 mb-6">
            Your Tailwind React project with shadcn-ui has been successfully
            configured. Below you can test some of the shadcn/ui components.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Dialog Component */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Alert Dialog
            </h3>
            <p className="text-gray-600 mb-6">
              Test the shadcn/ui Alert Dialog component:
            </p>
            <Dilog />
          </div>

          {/* Drawer Component */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Drawer</h3>
            <p className="text-gray-600 mb-6">
              Test the shadcn/ui Drawer component:
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-lg p-12 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            ✨ Features Included
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-indigo-600 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">Tailwind CSS</h4>
              <p className="text-gray-600">
                Utility-first CSS framework for rapid UI development
              </p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">shadcn/ui</h4>
              <p className="text-gray-600">
                Beautiful, accessible React components built on Radix UI
              </p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">React 19</h4>
              <p className="text-gray-600">
                Latest React with improved performance and features
              </p>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div className="bg-white rounded-lg shadow-lg p-12 mb-12 max-w-2xl mx-auto">
          <InputForm />
        </div>
        <div>
          <PremiumCard />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-12 mb-12 max-w-2xl mx-auto mt-4">
          <FormValidation />
        </div>
        {/* Footer */}
        <footer className="bg-gray-900 text-white rounded-lg p-8 text-center">
          <p className="mb-2">&copy; 2024 Your Tailwind React App</p>
          <p className="text-gray-400">
            Built with ❤️ using Tailwind CSS and shadcn/ui
          </p>
        </footer>
      </div>
      {/* <Suspense fallback={<h1>Loading...</h1>}>
        <React_19_Features />
      </Suspense> */}
    </div>
    </>
  );
};

export default Card;
