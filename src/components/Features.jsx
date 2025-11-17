import { Beaker, Globe2, Users, Building2 } from "lucide-react";

const features = [
  {
    icon: Beaker,
    title: "Cutting-edge Research",
    desc: "Collaborate with leading faculty on breakthrough projects across disciplines.",
  },
  {
    icon: Users,
    title: "Vibrant Community",
    desc: "Join 30,000+ students from 90+ countries. Diverse, inclusive, supportive.",
  },
  {
    icon: Globe2,
    title: "Global Opportunities",
    desc: "Study abroad, international internships, and global alumni network.",
  },
  {
    icon: Building2,
    title: "Modern Campus",
    desc: "State-of-the-art labs, libraries, sports, and creative spaces.",
  },
];

export default function Features() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Why choose Bluecrest</h2>
          <p className="mt-3 text-slate-600">A world-class education with the support and resources to thrive.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-xl border border-slate-200 bg-slate-50/40 hover:shadow-md transition">
              <Icon className="h-6 w-6 text-blue-600" />
              <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
