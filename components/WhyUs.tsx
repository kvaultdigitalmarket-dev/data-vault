"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, HardHat, Compass, Orbit, Database, Landmark } from "lucide-react";

export default function WhyUs() {
  const benefits = [
    {
      id: "platform",
      title: "Centralized Data Platform",
      description: "Break down operational silos. Consolidate ERP records, service requests, and communication details inside a single database instead of individual disjointed applications.",
      icon: <Database className="w-5 h-5 text-blue-600" />
    },
    {
      id: "expert",
      title: "Automotive Expertise",
      description: "We speak dealer. Our pre-configured models are purpose-built to parse dealer management systems, service intervals, and refinance qualification thresholds.",
      icon: <HardHat className="w-5 h-5 text-emerald-600" />
    },
    {
      id: "security",
      title: "Enterprise Security",
      description: "Secure customer profiles with absolute confidence. Our stack complies with SOC-2 guidelines, featuring end-to-end data encryption and role-based access rules.",
      icon: <ShieldCheck className="w-5 h-5 text-purple-600" />
    },
    {
      id: "realtime",
      title: "Real-Time Analytics",
      description: "Act immediately. Ingest and route records within milliseconds to automate campaign deliveries or sales alerts when buyers are ready to purchase.",
      icon: <Compass className="w-5 h-5 text-indigo-600" />
    },
    {
      id: "scale",
      title: "Scalable Architecture",
      description: "Engineered for rapid growth. Built on robust cloud infrastructures, the system handles traffic spikes for multi-location groups without slowing down.",
      icon: <Orbit className="w-5 h-5 text-amber-600" />
    },
    {
      id: "growth",
      title: "Business Growth Focus",
      description: "Software with an ROI. Every operational trigger and reporting dashboard is focused on one goal: increasing your client retention and sales conversion rates.",
      icon: <Landmark className="w-5 h-5 text-cyan-600" />
    }
  ];

  return (
    <section id="why-us" className="bg-slate-50/30 border-b border-slate-100 py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest bg-blue-50/70 border border-blue-100/40 px-3 py-1 rounded-full">
            OUR EDGE
          </span>
          <h2 className="text-section font-extrabold text-slate-900 tracking-tight mt-4">
            More Than Software. A Competitive Advantage.
          </h2>
          <p className="text-body-premium mt-4 max-w-2xl text-slate-500">
            Automotive retail moves fast. We give you the technical core needed to orchestrate your operational records and drive growth.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white border border-slate-200/60 rounded-2xl p-8 hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 tracking-tight leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-sm text-slate-500 mt-3 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 h-1 w-8 bg-slate-100 rounded group-hover:bg-blue-600 transition-colors" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
