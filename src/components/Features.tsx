import { ChartLine, Briefcase, User, Users, Building2, GlobeLock } from "lucide-react";
import { FaChartLine } from "react-icons/fa6";

const features = [
  {
    icon: ChartLine,
    title: "Excellence",
    description: "We strive for excellence in all aspects of our work, ensuring the highest standards of service delivery to both our clients and candidates.",
  },
  {
    icon: Briefcase,
    title: "Integrity",
    description: "We conduct our business with utmost integrity, maintaining transparency, honesty, and ethical practices throughout the recruitment process.",
  },
  {
    icon: User,
    title: "Diversity and Inclusion",
    description: "We value diversity and inclusion, promoting equal opportunities for all individuals regardless of their background, gender, or ethnicity.",
  },
  {
    icon: Users,
    title: "Continuous Learning",
    description: "We embrace a culture of continuous learning and improvement, staying updated with industry trends and technological advancements to provide the best possible solutions.",
  },
  {
    icon: Building2,
    title: "Pearson VUE Testing Centre",
    description: "Write exams at our certified testing center.",
  },
  {
    icon: GlobeLock,
    title: "Get Recruited",
    description: "Get knowledge in the world of networking through one of our courses.",
  },
];

const Features = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient bg-clip-text text-gray-300 bg-gradient-to-r from-sky-400 to-pink-600 py-3 font-heading animate-fade-in italic">
          Why Choose Forge Talent?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl border border-pink-950 bg-gray-800 backdrop-blur-sm shadow-lg shadow-[hsl(270,70%,30%)]/50 transition-all duration-300  group hover:scale-105 hover:shadow-[hsl(270,70%,40%)]/70 hover:border-gray-200  animate-fade-in hover:bg-slate-950"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <Icon className="h-12 w-12 text-pink-500 transition-transform duration-300 hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-sky-700 font-heading text-center group-hover:text-gray-300">
                  {feature.title}                </h3>
                <p className="text-sky-400 text-center">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;