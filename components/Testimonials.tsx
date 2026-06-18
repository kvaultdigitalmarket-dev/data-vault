"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      metric: "+34%",
      metricLabel: "Customer Retention Increase",
      quote: "By centralizing our regional DMS records inside the Data Vault, we gained instant pipeline visibility across all showrooms. Year-over-year retention grew by 34% in 9 months.",
      author: "Marcus Vance",
      role: "Vice President of Operations",
      company: "Vance Automotive Group (14 Locations)",
      benefit: "Better Customer Retention"
    },
    {
      metric: "9.2s",
      metricLabel: "Refinance Match Velocity",
      quote: "Our finance processing dropped from hours to seconds. The system queries our lender network against central database profiles instantly, creating a 22% increase in sales margins.",
      author: "Elena Rostova",
      role: "Chief Financial Officer",
      company: "Apex Auto Lenders LLC",
      benefit: "Faster Operations & Income"
    },
    {
      metric: "40%",
      metricLabel: "Fewer Missed Service Bookings",
      quote: "Managing service contracts via the KCP module and sending WhatsApp service reminders has cut no-shows by 40%, keeping our bays full and service advisers productive.",
      author: "David Miller",
      role: "Director of Service Operations",
      company: "Summit Car Service Hubs",
      benefit: "Increased Revenue & Productivity"
    }
  ];

  return (
    <section className="bg-white py-32 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-24">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest bg-blue-50/70 border border-blue-100/40 px-3 py-1 rounded-full">
            CUSTOMER SUCCESS
          </span>
          <h2 className="text-section font-extrabold text-slate-900 tracking-tight mt-4">
            Proven Performance Across Enterprise Groups
          </h2>
          <p className="text-body-premium mt-4 max-w-2xl text-slate-500">
            Real ROI measured by national dealer networks, auto financial providers, and large independent service centers.
          </p>
        </div>

        {/* Testimonials Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50/40 border border-slate-200/60 rounded-3xl p-8 flex flex-col justify-between relative"
            >
              <div>
                {/* Metric callout */}
                <div className="mb-8">
                  <span className="text-5xl font-extrabold text-slate-900 tracking-tight block">
                    {test.metric}
                  </span>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mt-1 block">
                    {test.metricLabel}
                  </span>
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-slate-200 absolute -top-4 -left-3 -z-10 transform -rotate-180" />
                  <p className="text-sm text-slate-600 leading-relaxed font-medium relative z-10 italic">
                    "{test.quote}"
                  </p>
                </div>
              </div>

              {/* Author Detail */}
              <div className="mt-8 pt-6 border-t border-slate-200/50">
                <p className="text-sm font-bold text-slate-800 leading-tight">
                  {test.author}
                </p>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  {test.role}
                </p>
                <p className="text-xs text-slate-400 mt-0.5 font-semibold">
                  {test.company}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
