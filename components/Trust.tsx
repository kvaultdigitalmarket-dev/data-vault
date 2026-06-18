"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { Users2, CheckCircle2, Cpu, TrendingUp } from "lucide-react";

export default function Trust() {
  const metrics = [
    {
      id: "profiles",
      label: "Unified Customer Profiles",
      value: 8429104,
      prefix: "",
      suffix: "",
      decimals: 0,
      icon: <Users2 className="w-5 h-5 text-blue-600" />,
      description: "Aggregated dealer, service, and finance interactions."
    },
    {
      id: "insights",
      label: "Uptime SLA Guarantee",
      value: 99.99,
      prefix: "",
      suffix: "%",
      decimals: 2,
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
      description: "Continuous synchronization without service interruptions."
    },
    {
      id: "workflows",
      label: "Automated Operations",
      value: 4821392,
      prefix: "",
      suffix: "",
      decimals: 0,
      icon: <Cpu className="w-5 h-5 text-purple-600" />,
      description: "Triggered booking, scheduling, and marketing syncs."
    },
    {
      id: "retention",
      label: "Customer Retention",
      value: 34.2,
      prefix: "+",
      suffix: "%",
      decimals: 1,
      icon: <TrendingUp className="w-5 h-5 text-indigo-600" />,
      description: "Average year-over-year client retention boost."
    }
  ];

  return (
    <section className="bg-slate-50/50 border-y border-slate-100 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            The Data Layer Behind Smarter Automotive Businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm font-medium text-slate-500 uppercase tracking-widest mt-3"
          >
            Enterprise metrics backed by high-throughput computing
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-colors duration-300" />
              
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                  {metric.icon}
                </div>
                
                <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight flex items-baseline gap-1">
                  <AnimatedCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    decimals={metric.decimals}
                    duration={1.8}
                  />
                </h3>
                
                <p className="text-base font-semibold text-slate-800 mt-2">
                  {metric.label}
                </p>
              </div>

              <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
