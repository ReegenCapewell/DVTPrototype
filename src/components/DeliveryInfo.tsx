import { Truck, MapPin, Clock, Phone } from "lucide-react";

// Phase 2: Insert dynamic Postcode Delivery Calculator here

const deliveryFeatures = [
  {
    icon: MapPin,
    title: "Local Area Delivery",
    description:
      "We deliver throughout the local region and surrounding counties. Contact us to confirm we cover your postcode.",
  },
  {
    icon: Clock,
    title: "Next-Day Available",
    description:
      "Orders placed before 12pm are eligible for next working day delivery, subject to stock availability.",
  },
  {
    icon: Truck,
    title: "Hiab & Flatbed Vehicles",
    description:
      "Our fleet includes hiab crane lorries and flatbed vehicles capable of handling full-pack deliveries and awkward access.",
  },
  {
    icon: Phone,
    title: "Call to Confirm",
    description:
      "Call our yard directly to confirm delivery availability, lead times, and pricing for your project.",
  },
];

export default function DeliveryInfo() {
  return (
    <section id="delivery" className="py-20 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
          <div className="flex items-center gap-4">
            <div className="bg-stone-800 p-4 rounded-full shrink-0">
              <Truck className="h-8 w-8 text-amber-500" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Local Delivery Available
              </h2>
              <p className="text-stone-400 mt-1 text-base md:text-lg">
                We&apos;ll bring your order straight to site — saving you time
                and hassle.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-amber-700 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Get a Delivery Quote
          </a>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliveryFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-stone-800/50 border border-stone-700 rounded-xl p-6"
            >
              <feature.icon className="h-6 w-6 text-amber-500 mb-3" />
              <h3 className="font-bold text-white text-base mb-2">
                {feature.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Phase 2 Placeholder Banner */}
        <div className="mt-10 border border-dashed border-stone-600 rounded-xl p-6 text-center">
          <p className="text-stone-500 text-sm font-mono">
            {/* Phase 2: Insert dynamic Postcode Delivery Calculator here */}
            🚛 Phase 2: A live postcode delivery checker will be integrated
            here.
          </p>
        </div>
      </div>
    </section>
  );
}
