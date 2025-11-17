const stats = [
  { label: "Programs", value: "250+" },
  { label: "Research Centers", value: "40+" },
  { label: "Student Clubs", value: "180+" },
  { label: "Countries Represented", value: "90+" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="text-3xl font-extrabold text-slate-900">{s.value}</div>
              <div className="mt-1 text-sm text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
