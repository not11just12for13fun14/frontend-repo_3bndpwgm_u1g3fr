export default function CTA() {
  return (
    <section id="admissions" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Ready to begin?</h2>
            <p className="mt-3 text-slate-300">Applications for Fall 2025 are now open. Submit your application and join a community that’s changing the world.</p>
          </div>
          <div className="flex gap-3">
            <a href="#apply" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-6 py-3 text-sm font-medium hover:bg-slate-100 transition">Apply Now</a>
            <a href="#visit" className="inline-flex items-center justify-center rounded-md bg-transparent border border-slate-600 text-white px-6 py-3 text-sm font-medium hover:bg-slate-800 transition">Plan a Visit</a>
          </div>
        </div>
      </div>
    </section>
  );
}
