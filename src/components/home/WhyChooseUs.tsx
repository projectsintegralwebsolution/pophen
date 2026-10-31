import {
  Compass,
  Layers,
  Award,
  ShieldCheck,
  Wrench,
  Globe,
  CheckCircle,
} from "lucide-react";
import { WHY_CHOOSE_POPHEN, StrengthItem } from "@/data/whyChooseUs";

export function WhyChooseUs() {
  const getIcon = (name: StrengthItem["iconName"]) => {
    switch (name) {
      case "Compass":
        return <Compass className="w-6 h-6 text-pophen-blue" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-pophen-blue" />;
      case "Award":
        return <Award className="w-6 h-6 text-pophen-blue" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-pophen-blue" />;
      case "Wrench":
        return <Wrench className="w-6 h-6 text-pophen-blue" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-pophen-blue" />;
      default:
        return <CheckCircle className="w-6 h-6 text-pophen-blue" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pophen-blue/10 text-pophen-blue text-xs font-bold uppercase tracking-wider">
            Industrial Engineering Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-pophen-navy tracking-tight">
            Why High-Tech Leaders Partner With POPHEN
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our cleanroom systems are engineered from first principles for airtight sealing, acoustic and thermal stability, chemical durability, and seamless GMP compliance.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_POPHEN.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-pophen-blue/30 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-pophen-blue/10 group-hover:bg-pophen-blue group-hover:text-white transition-colors duration-200">
                    <div className="group-hover:brightness-0 group-hover:invert transition-all">
                      {getIcon(item.iconName)}
                    </div>
                  </div>
                  <span className="text-[12px] font-semibold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-pophen-blue shadow-xs">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-pophen-navy group-hover:text-pophen-blue transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
