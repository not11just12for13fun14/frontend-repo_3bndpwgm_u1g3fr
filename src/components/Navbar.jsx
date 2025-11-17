import { Menu, GraduationCap, Search } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <GraduationCap className="h-7 w-7 text-blue-600" />
            <span className="font-semibold text-lg tracking-tight">Bluecrest University</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#programs" className="hover:text-blue-600 transition">Programs</a>
            <a href="#campus" className="hover:text-blue-600 transition">Campus Life</a>
            <a href="#stats" className="hover:text-blue-600 transition">At a Glance</a>
            <a href="#admissions" className="hover:text-blue-600 transition">Admissions</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-3 py-2 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
              />
            </div>
            <a href="#apply" className="inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition">
              Apply Now
            </a>
          </div>

          <button className="md:hidden p-2 rounded-md border border-slate-200" onClick={() => setOpen(!open)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#programs" className="block">Programs</a>
            <a href="#campus" className="block">Campus Life</a>
            <a href="#stats" className="block">At a Glance</a>
            <a href="#admissions" className="block">Admissions</a>
            <a href="#apply" className="inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium">Apply Now</a>
          </div>
        )}
      </div>
    </header>
  );
}
