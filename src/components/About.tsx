/* eslint-disable @next/next/no-img-element */
import { ShieldCheck, Users, Award, Leaf } from "lucide-react";

const stats = [
  { label: "Established", value: "2008" },
  { label: "Years of Trade Experience", value: "30+" },
  { label: "Products in Stock", value: "500+" },
  { label: "Trade Accounts Active", value: "200+" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description:
      "Every product we stock meets strict quality standards. We only supply timbers and materials we'd use ourselves.",
  },
  {
    icon: Users,
    title: "Trade & DIY Welcome",
    description:
      "Whether you're a fencing contractor, builder, or a weekend DIYer, you'll receive the same honest advice and competitive pricing.",
  },
  {
    icon: Award,
    title: "30+ Years Experience",
    description:
      "Our team brings over three decades of combined knowledge to every customer interaction, from timber selection to project planning.",
  },
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description:
      "We're committed to responsible sourcing, stocking FSC-certified and PEFC-certified timber products where available.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-amber-700 font-semibold text-sm uppercase tracking-widest">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2">
            A Family Business Built on Timber
          </h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Founded in 2008, Dove Valley Timber and Fencing Supplies Ltd has
            grown from a small local yard into one of the region&apos;s most
            trusted independent timber merchants. We combine decades of hands-on
            trade experience with a straight-talking, no-nonsense approach that
            tradespeople rely on.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-stone-50 rounded-lg border border-stone-200"
            >
              <div className="text-3xl md:text-4xl font-bold text-amber-700">
                {stat.value}
              </div>
              <div className="text-stone-600 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-lg h-72 md:h-96">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Timber yard with stacked wood"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <v.icon className="h-5 w-5 text-amber-700 shrink-0" />
                  <h3 className="font-bold text-stone-900">{v.title}</h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
