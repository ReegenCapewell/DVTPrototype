/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
  tag?: string;
}

export default function ProductCard({
  name,
  description,
  imageUrl,
  tag,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md hover:border-amber-300 transition-all group">
      {/* Image */}
      <div className="h-48 overflow-hidden relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {tag && (
          <span className="absolute top-3 left-3 bg-emerald-800 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="font-bold text-stone-900 text-lg mb-1">{name}</h3>
        <p className="text-stone-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center gap-1.5 text-amber-700 hover:text-amber-600 text-sm font-semibold transition-colors"
        >
          Enquire Now
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
