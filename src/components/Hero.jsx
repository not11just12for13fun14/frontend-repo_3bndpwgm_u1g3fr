import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full text-xs font-semibold">Top 1% Research University</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Shape the future at Bluecrest University
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Discover world-class programs, vibrant campus life, and a community of innovators. Your journey starts here.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#apply" className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-6 py-3 text-sm font-medium hover:bg-blue-700 transition">
                Start your application
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#programs" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-6 py-3 text-sm font-medium border border-slate-200 hover:bg-slate-50 transition">
                Explore programs
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop"
              alt="Students on campus"
              className="w-full rounded-xl shadow-2xl border border-slate-200"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border border-slate-100">
              <p className="text-sm font-semibold">96% graduate employment rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
