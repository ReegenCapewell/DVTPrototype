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
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-brand-cream hover:shadow-md hover:border-brand-salmon transition-all group">
      {/* Image */}
      <div className="h-48 overflow-hidden relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {tag && (
          <span className="absolute top-3 left-3 bg-brand-green text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="font-bold text-brand-green text-lg mb-1">{name}</h3>
        <p className="text-stone-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center gap-1.5 text-brand-salmon hover:text-brand-salmon/70 text-sm font-semibold transition-colors"
        >
          Enquire Now
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
