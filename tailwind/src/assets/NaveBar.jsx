import { Search, Moon, Sun, Menu } from "lucide-react";
import { useState } from "react";

export default function NaveBar() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 font-bold text-white shadow-lg">
            M
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              Mini Tanvi
            </h1>
            <p className="text-xs text-zinc-400">
              Daily Life Vlogs
            </p>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-zinc-300 transition hover:text-white"
          >
            Home
          </a>

          <a
            href="/about"
            className="text-zinc-300 transition hover:text-white"
          >
            About
          </a>

          <a
            href="/contact"
            className="text-zinc-300 transition hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <div className="hidden items-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 md:flex">
            <Search size={18} className="text-zinc-400" />

            <input
              type="text"
              placeholder="Search..."
              className="ml-2 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
            />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
          >
            {darkMode ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>

          {/* Login */}
          <button className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2 font-medium text-white shadow-lg transition hover:scale-105">
            Login
          </button>

          {/* Mobile Menu */}
          <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-white md:hidden">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}