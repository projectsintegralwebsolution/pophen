import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ACTIVITIES_DATA, ActivityItem } from "@/data/activities";

export function ActivitiesShowcase() {
  return (
    <section id="activities" className="py-20 lg:py-28 bg-pophen-navy-950 text-white relative overflow-hidden">
      {/* Background Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pophen-blue/20 text-pophen-cyan text-xs font-bold uppercase tracking-wider border border-pophen-cyan/20">
              End-to-End Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              The Basis for Turnkey Cleanroom Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Pophen provides complete cleanroom solutions including design, engineering, modular manufacturing, installation, and maintenance for high-precision industries.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-pophen-blue hover:bg-pophen-blue-hover text-white transition-colors"
            >
              <span>Discuss Project Scope</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6 Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ACTIVITIES_DATA.map((activity: ActivityItem) => (
            <div
              key={activity.id}
              className="bg-pophen-navy/80 rounded-2xl overflow-hidden border border-white/10 hover:border-pophen-cyan/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg"
            >
              {/* Image with subtle overlay */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pophen-navy/90 via-pophen-navy/27 to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-pophen-cyan text-xs font-mono font-bold border border-white/10">
                  {activity.number}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-pophen-cyan transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activity.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-1">
                  {activity.scope.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pophen-cyan flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
