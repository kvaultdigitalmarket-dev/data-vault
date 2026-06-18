"use client";

import React from "react";
import { motion } from "framer-motion";
import { Landmark, ShieldPlus, Building, Car, Layers } from "lucide-react";

export default function AutomotiveIndustry() {
  const industries = [
    {
      id: "dealerships",
      title: "Franchised Dealerships",
      description: "Unify showroom sales, test drives, and back-office operations. Keep buyer histories synchronized across sales departments automatically.",
      icon: <Car className="w-5 h-5 text-blue-600" />,
      tag: "Single Showrooms"
    },
    {
      id: "service",
      title: "Car Service Centers",
      description: "Automate routine service checkups, maintenance scheduling, and KCP tracking. Deliver reminders directly through WhatsApp campaigns.",
      icon: <Layers className="w-5 h-5 text-emerald-600" />,
      tag: "Maintenance Hubs"
    },
    {
      id: "groups",
      title: "Multi-Location Groups",
      description: "Consolidate inventories and customer records. Provide executives with a clean, single-point view of operational performance across states.",
      icon: <Building className="w-5 h-5 text-purple-600" />,
      tag: "Large Enterprises"
    },
    {
      id: "finance",
      title: "Auto Finance Providers",
      description: "Speed up credit reviews and refinance offers. Integrate custom lending checkers directly into dealership point-of-sale systems.",
      icon: <Landmark className="w-5 h-5 text-indigo-600" />,
      tag: "Lenders & Banks"
    },
    {
      id: "warranty",
      title: "Warranty & Plan Providers",
      description: "Manage service plans, coverage terms, and extensions. Remind customers automatically when service contracts are close to expiring.",
      icon: <ShieldPlus className="w-5 h-5 text-amber-600" />,
      tag: "Insurance & KCP"
    }
  ];

  return (
    <section id="industries" className="bg-slate-50/20 py-32 relative overflow-hidden border-b border-slate-100">
      {/* Subtle lines grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_0.5px,transparent_0.5px)] bg-[size:6rem_6rem] opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest bg-blue-50/70 border border-blue-100/40 px-3 py-1 rounded-full">
            MARKET FOCUS
          </span>
          <h2 className="text-section font-extrabold text-slate-900 tracking-tight mt-4">
            Purpose-Built For Automotive Businesses
          </h2>
          <p className="text-body-premium mt-4 max-w-2xl text-slate-500">
            Our technology adapts to your scale. From individual franchise dealerships to large multi-location groups and auto lenders, we secure your data layer.
          </p>
        </div>

        {/* 5-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {industries.map((ind, index) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {ind.icon}
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-0.5 rounded">
                    {ind.tag}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-slate-800 tracking-tight leading-snug">
                  {ind.title}
                </h3>

                <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-50 text-[10px] font-bold text-slate-400 select-none uppercase tracking-wider">
                Active Integrations
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
