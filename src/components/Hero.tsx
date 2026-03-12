/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Clock, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
          alt="Timber yard background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20">
        {/* Opening hours badge */}
        <div className="inline-flex items-center gap-2 bg-brand-green/90 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
          <Clock className="h-4 w-4 text-brand-cream" />
          Open Mon–Fri 8am–5pm
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-4">
          Your Local Timber &amp; Fencing Specialist
        </h1>

        <p className="text-brand-cream text-lg md:text-xl max-w-2xl mb-8">
          Supplying trade professionals and DIY enthusiasts across the region
          with quality timber, fencing panels, and structural materials. Trusted
          since 2008.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-600 text-white font-semibold text-base px-6 py-3 rounded-md transition-colors"
          >
            Get a Quote
            <ChevronRight className="h-5 w-5" />
          </Link>
          <Link
            href="#products"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-base px-6 py-3 rounded-md transition-colors backdrop-blur-sm"
          >
            View Products
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap gap-6 text-brand-cream text-sm">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-salmon inline-block" />
            15+ Years in Business
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-salmon inline-block" />
            Trade &amp; Retail Welcome
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-salmon inline-block" />
            Local Delivery Available
          </span>
        </div>
      </div>
    </section>
  );
}
