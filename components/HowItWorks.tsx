"use client";

import React from "react";
import { motion } from "framer-motion";
import { DownloadCloud, Layers, Cpu, Radio, Sparkles } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Collect Data",
      description: "Aggregates events from your DMS, sales floor, web browsers, and vehicle telemetry.",
      icon: <DownloadCloud className="w-5 h-5 text-blue-600" />
    },
    {
      step: "02",
      title: "Centralize Vault",
      description: "Stores cleaned raw data inside an immutable, secure, centralized database.",
      icon: <Layers className="w-5 h-5 text-emerald-600" />
    },
    {
      step: "03",
      title: "Process & Score",
      description: "Applies risk, service renewals, and lifecycle calculations to profiles automatically.",
      icon: <Cpu className="w-5 h-5 text-purple-600" />
    },
    {
      step: "04",
      title: "Power Apps",
      description: "Distributes clean states directly to WhatsApp automation, CRM, and sales pipelines.",
      icon: <Radio className="w-5 h-5 text-indigo-600" />
    },
    {
      step: "05",
      title: "Generate Growth",
      description: "Drives customer retention and speeds up loan approvals through synced intelligence.",
      icon: <Sparkles className="w-5 h-5 text-amber-600" />
    }
  ];

  return (
    <section id="how-it-works" className="bg-white py-32 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-24">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest bg-blue-50/70 border border-blue-100/40 px-3 py-1 rounded-full">
            WORKFLOW
          </span>
          <h2 className="text-section font-extrabold text-slate-900 tracking-tight mt-4">
            From Raw Data To Business Growth
          </h2>
          <p className="text-body-premium mt-4 max-w-2xl text-slate-500">
            A pipeline structured for efficiency. We process your dealership data in real time, moving from initial collection to automated operations.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          
          {/* Horizontal Track Line for desktop */}
          <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-0.5 bg-slate-100 z-0">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-full bg-blue-600"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col items-start lg:items-center text-left lg:text-center relative group"
              >
                {/* Timeline Step Badge */}
                <div className="w-24 h-24 rounded-full bg-white border border-slate-200/80 shadow-md flex items-center justify-center relative mb-6 group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/5 transition-all">
                  <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    {item.icon}
                  </div>
                  {/* Step label index */}
                  <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-slate-950 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white select-none">
                    {item.step}
                  </span>
                </div>

                {/* Vertical/Horizontal Connecting line for mobile */}
                <div className="lg:hidden absolute left-[47px] top-[96px] bottom-[-48px] w-0.5 bg-slate-100 -z-10 group-last:hidden" />

                <div className="lg:px-4 pl-28 lg:pl-0 mt-[-70px] lg:mt-0 min-h-[90px] lg:min-h-0">
                  <h3 className="text-lg font-extrabold text-slate-800 tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
