"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-amber-700 font-semibold text-sm uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2">
            Request a Quote
          </h2>
          <p className="text-stone-600 mt-4 max-w-xl mx-auto">
            Fill in the form below and a member of our team will get back to you
            promptly. Alternatively, give us a ring or visit the yard.
          </p>
        </div>

        {/* Contact details strip */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-stone-600">
          <a
            href="tel:+441234567890"
            className="flex items-center gap-2 hover:text-amber-700 transition-colors"
          >
            <Phone className="h-4 w-4 text-amber-700" />
            01234 567 890
          </a>
          <a
            href="mailto:info@dovevalleytimber.co.uk"
            className="flex items-center gap-2 hover:text-amber-700 transition-colors"
          >
            <Mail className="h-4 w-4 text-amber-700" />
            info@dovevalleytimber.co.uk
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-amber-700" />
            Dove Valley Yard, Mill Lane, Derbyshire, DE1 2AB
          </span>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto w-full">
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                <CheckCircle className="h-14 w-14 text-emerald-600" />
                <h3 className="text-2xl font-bold text-stone-900">
                  Enquiry Received!
                </h3>
                <p className="text-stone-600 max-w-sm">
                  Thank you for getting in touch. A member of the Dove Valley
                  team will contact you within one working day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      address: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="mt-4 text-amber-700 hover:text-amber-600 font-semibold text-sm underline underline-offset-4"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-700 text-sm font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 text-sm font-medium mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.co.uk"
                      className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-700 text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="07700 900000"
                      className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 text-sm font-medium mb-1">
                      Delivery Postcode
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="DE1 2AB"
                      className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 text-sm font-medium mb-1">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select a subject...</option>
                    <option value="quote">Request a Quote</option>
                    <option value="delivery">Delivery Enquiry</option>
                    <option value="stock">Stock Availability</option>
                    <option value="trade">Trade Account Enquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-700 text-sm font-medium mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Please describe your requirements, including quantities, sizes, and any special requirements..."
                    className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-700 hover:bg-amber-600 text-white font-semibold py-3 rounded-md transition-colors"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
