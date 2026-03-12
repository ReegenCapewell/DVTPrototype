"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, TreePine, CheckCircle } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Delivery Info", href: "#delivery" },
  { label: "Contact & Quote", href: "#contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-brand-green text-brand-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand / NAP */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <TreePine className="h-6 w-6 text-brand-salmon" />
              <div>
                <span className="block text-white font-bold text-base">
                  Dove Valley Timber
                </span>
                <span className="block text-brand-salmon text-xs font-medium tracking-widest uppercase">
                  &amp; Fencing Supplies Ltd
                </span>
              </div>
            </div>
            <p className="text-brand-cream/70 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted independent timber merchant since 2008. Supplying
              trade professionals and DIY customers with quality timber, fencing
              and structural materials.
            </p>
            {/* NAP */}
            <address className="not-italic flex flex-col gap-2 text-sm">
              <span className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brand-salmon mt-0.5 shrink-0" />
                Dove Valley Yard, Mill Lane, Derbyshire, DE1 2AB
              </span>
              <a
                href="tel:+441234567890"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-brand-salmon shrink-0" />
                01234 567 890
              </a>
              <a
                href="mailto:info@dovevalleytimber.co.uk"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-brand-salmon shrink-0" />
                info@dovevalleytimber.co.uk
              </a>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-cream/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-widest">
                Opening Hours
              </h3>
              <ul className="text-brand-cream/70 text-sm flex flex-col gap-1">
                <li>Mon–Fri: 8:00am – 5:00pm</li>
                <li>Saturday: 8:00am – 12:00pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-widest">
              Trade Updates
            </h3>
            <p className="text-brand-cream/70 text-sm mb-4 leading-relaxed">
              Sign up for stock updates, seasonal offers and trade news from
              Dove Valley.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-brand-cream text-sm font-medium">
                <CheckCircle className="h-5 w-5" />
                You&apos;re subscribed — thanks!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.co.uk"
                  required
                  className="w-full bg-brand-green/70 border border-brand-green/30 rounded-md px-3 py-2 text-sm text-white placeholder-brand-cream/40 focus:outline-none focus:ring-2 focus:ring-brand-salmon focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-brand-salmon hover:bg-brand-salmon/80 text-white font-semibold text-sm py-2 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-green/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-brand-cream/50 text-xs">
          <span>
            &copy; {new Date().getFullYear()} Dove Valley Timber and Fencing
            Supplies Ltd. All rights reserved.
          </span>
          <span>Company No. 12345678 | Registered in England &amp; Wales</span>
        </div>
      </div>
    </footer>
  );
}
