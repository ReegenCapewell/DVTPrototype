import ProductCard from "@/components/ProductCard";

const products = [
  {
    name: "Closeboard Panels",
    description:
      "Heavy-duty closeboard fencing panels available in 4ft, 5ft, and 6ft heights. Pressure-treated for long-term weather resistance. Ideal for garden boundaries and privacy screening.",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    tag: "Best Seller",
  },
  {
    name: "Timber Posts",
    description:
      "Rounded and square-sawn fence posts in a range of sizes. Supplied pre-treated with UC4 preservative for ground contact. Available in 2.4m, 3.0m, and 3.6m lengths.",
    imageUrl:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    tag: "In Stock",
  },
  {
    name: "Sleepers",
    description:
      "New and reclaimed oak and softwood railway sleepers for raised beds, retaining walls, pathways, and landscaping. Various grades available.",
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    tag: "Popular",
  },
  {
    name: "PAR Materials",
    description:
      "Planed-All-Round (PAR) softwood in a full range of profiles and lengths. Smooth finish suitable for internal joinery, shelving, and furniture projects.",
    imageUrl:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80",
  },
  {
    name: "Treated Timbers",
    description:
      "Pressure-treated structural and carcassing timbers ideal for external use. UC3 and UC4 treatment levels stocked. Perfect for decking, fencing, and groundworks.",
    imageUrl:
      "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=600&q=80",
    tag: "Trade Favourite",
  },
  {
    name: "Sheet Materials",
    description:
      "OSB, plywood, MDF, and hardboard boards in standard and non-standard sheet sizes. Structural and non-structural grades available. Cut-to-size service offered.",
    imageUrl:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
  },
  {
    name: "C16/C24 Graded Timber",
    description:
      "Strength-graded structural softwood to C16 and C24 specification. Suitable for joists, rafters, studwork, and all load-bearing applications. NHBC and building control compliant.",
    imageUrl:
      "https://images.unsplash.com/photo-1586864387789-628af9feed72?w=600&q=80",
    tag: "Structural",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-amber-700 font-semibold text-sm uppercase tracking-widest">
            Our Range
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2">
            Products &amp; Materials
          </h2>
          <p className="text-stone-600 mt-4 max-w-xl mx-auto">
            From structural graded timber to decorative fencing solutions, we
            stock everything you need for your next project.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-stone-600 mb-4">
            Can&apos;t see what you&apos;re looking for? We source and stock a
            wide variety of timber and fencing products.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Contact Us for Custom Orders
          </a>
        </div>
      </div>
    </section>
  );
}
