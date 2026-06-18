"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Database, Layers, RefreshCw, Zap, ShieldCheck, Server, Car, Globe } from "lucide-react";

interface HeroProps {
  onBookDemoClick: () => void;
}

export default function Hero({ onBookDemoClick }: HeroProps) {
  // SVG Flow Animation definitions
  const pulseTransition = {
    strokeDashoffset: [0, -20],
    transition: {
      ease: "linear" as const,
      duration: 2,
      repeat: Infinity,
    },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 bg-white overflow-hidden flex items-center">
      {/* Background Decorative Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      {/* Floating Ambient Aura */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100/70 mb-6"
            >
              <Zap className="w-3.5 h-3.5 fill-blue-600" />
              Automotive Intelligence Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-hero font-extrabold text-slate-900 leading-tight tracking-tight"
            >
              Turn Automotive Data Into Business <span className="text-blue-600">Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body-premium mt-6 max-w-xl text-slate-500 font-normal"
            >
              Connect CRM, Finance, Sales, Service Plans, and Customer Communications through a unified data platform designed for modern automotive businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onBookDemoClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all cursor-pointer group"
              >
                Book a Demo
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="#platform"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 hover:text-slate-900 rounded-full border border-slate-200 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-slate-700 stroke-none" />
                Explore Platform
              </a>
            </motion.div>

            {/* Micro Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center gap-6 text-slate-400 text-sm font-medium"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> SOC-2 Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <RefreshCw className="w-4 h-4 text-blue-500 animate-spin-slow" /> Real-time Syncing
              </span>
            </motion.div>
          </div>

          {/* Right Architecture Graphics Column */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[500px]">
            {/* Ambient shadow backplate */}
            <div className="absolute inset-0 bg-slate-100/10 rounded-3xl border border-slate-200/50 backdrop-blur-2xl" />

            <div className="relative w-full max-w-xl aspect-[4/3] z-10 p-4">
              
              {/* SVG Core Diagram */}
              <svg className="w-full h-full" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connections paths from Sources (Left) to Data Vault (Center) */}
                {/* Source 1 (Top Left) to Vault */}
                <path d="M 150 88 Q 260 88 260 225" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
                <motion.path d="M 150 88 Q 260 88 260 225" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="8 12" fill="none" animate={pulseTransition} />

                {/* Source 2 (Mid Left) to Vault */}
                <path d="M 150 225 H 260" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
                <motion.path d="M 150 225 H 260" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="8 12" fill="none" animate={pulseTransition} />

                {/* Source 3 (Bottom Left) to Vault */}
                <path d="M 150 362 Q 260 362 260 225" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
                <motion.path d="M 150 362 Q 260 362 260 225" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="8 12" fill="none" animate={pulseTransition} />

                {/* Connections paths from Data Vault (Center) to Downstream Apps (Right) */}
                {/* Vault to App 1 (Top Right) */}
                <path d="M 340 225 Q 340 60 450 60" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
                <motion.path d="M 340 225 Q 340 60 450 60" stroke="#10B981" strokeWidth="2.5" strokeDasharray="8 12" fill="none" animate={pulseTransition} />

                {/* Vault to App 2 (Mid-High Right) */}
                <path d="M 340 225 Q 340 142.5 450 142.5" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
                <motion.path d="M 340 225 Q 340 142.5 450 142.5" stroke="#10B981" strokeWidth="2.5" strokeDasharray="8 12" fill="none" animate={pulseTransition} />

                {/* Vault to App 3 (Center Right) */}
                <path d="M 340 225 H 450" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
                <motion.path d="M 340 225 H 450" stroke="#10B981" strokeWidth="2.5" strokeDasharray="8 12" fill="none" animate={pulseTransition} />

                {/* Vault to App 4 (Mid-Low Right) */}
                <path d="M 340 225 Q 340 307.5 450 307.5" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
                <motion.path d="M 340 225 Q 340 307.5 450 307.5" stroke="#10B981" strokeWidth="2.5" strokeDasharray="8 12" fill="none" animate={pulseTransition} />

                {/* Vault to App 5 (Bottom Right) */}
                <path d="M 340 225 Q 340 390 450 390" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
                <motion.path d="M 340 225 Q 340 390 450 390" stroke="#10B981" strokeWidth="2.5" strokeDasharray="8 12" fill="none" animate={pulseTransition} />

                {/* Left Nodes: ERP, IoT, Web Portals */}
                <foreignObject x="15" y="60" width="135" height="56" className="overflow-visible">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full rounded-xl bg-white border border-slate-200/80 shadow-md flex items-center gap-2 px-2.5 text-[10px] font-bold text-slate-800 select-none cursor-default"
                  >
                    <div className="w-5.5 h-5.5 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100/50">
                      <Server className="w-3.5 h-3.5" />
                    </div>
                    <span className="whitespace-nowrap">ERP & DMS</span>
                  </motion.div>
                </foreignObject>

                <foreignObject x="15" y="197" width="135" height="56" className="overflow-visible">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full rounded-xl bg-white border border-slate-200/80 shadow-md flex items-center gap-2 px-2.5 text-[10px] font-bold text-slate-800 select-none cursor-default"
                  >
                    <div className="w-5.5 h-5.5 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0 border border-cyan-100/50">
                      <Car className="w-3.5 h-3.5" />
                    </div>
                    <span className="whitespace-nowrap">IoT Vehicles</span>
                  </motion.div>
                </foreignObject>

                <foreignObject x="15" y="334" width="135" height="56" className="overflow-visible">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full rounded-xl bg-white border border-slate-200/80 shadow-md flex items-center gap-2 px-2.5 text-[10px] font-bold text-slate-800 select-none cursor-default"
                  >
                    <div className="w-5.5 h-5.5 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 border border-indigo-100/50">
                      <Globe className="w-3.5 h-3.5" />
                    </div>
                    <span className="whitespace-nowrap">Web Portals</span>
                  </motion.div>
                </foreignObject>

                {/* Central Data Vault Node */}
                <foreignObject x="260" y="185" width="80" height="80" className="overflow-visible">
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(37, 99, 235, 0.2)",
                          "0 0 0 16px rgba(37, 99, 235, 0)",
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.5,
                      }}
                      className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white border border-slate-800 shadow-xl"
                    >
                      <Database className="w-7 h-7 text-blue-400" />
                    </motion.div>
                    <div className="mt-1.5 text-[9px] font-extrabold text-slate-900 bg-white/95 px-2 py-0.5 rounded-full border border-slate-200/80 shadow-sm whitespace-nowrap">
                      DATA VAULT
                    </div>
                  </div>
                </foreignObject>

                {/* Right Nodes: CRM, Finance, Sales, KCP, WhatsApp */}
                <foreignObject x="450" y="35" width="135" height="50" className="overflow-visible">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full rounded-xl bg-white border border-slate-200/80 shadow-md flex items-center gap-2 px-2.5 text-[10px] font-bold text-slate-800 select-none cursor-default"
                  >
                    <div className="w-5.5 h-5.5 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-[11px] font-extrabold flex-shrink-0 border border-emerald-100/50">C</div>
                    <span className="whitespace-nowrap">CRM Suite</span>
                  </motion.div>
                </foreignObject>

                <foreignObject x="450" y="117.5" width="135" height="50" className="overflow-visible">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full rounded-xl bg-white border border-slate-200/80 shadow-md flex items-center gap-2 px-2.5 text-[10px] font-bold text-slate-800 select-none cursor-default"
                  >
                    <div className="w-5.5 h-5.5 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center text-[11px] font-extrabold flex-shrink-0 border border-purple-100/50">F</div>
                    <span className="whitespace-nowrap">Finance</span>
                  </motion.div>
                </foreignObject>

                <foreignObject x="450" y="200" width="135" height="50" className="overflow-visible">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full rounded-xl bg-white border border-slate-200/80 shadow-md flex items-center gap-2 px-2.5 text-[10px] font-bold text-slate-800 select-none cursor-default"
                  >
                    <div className="w-5.5 h-5.5 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-[11px] font-extrabold flex-shrink-0 border border-blue-100/50">S</div>
                    <span className="whitespace-nowrap">Sales Mgmt</span>
                  </motion.div>
                </foreignObject>

                <foreignObject x="450" y="282.5" width="135" height="50" className="overflow-visible">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full rounded-xl bg-white border border-slate-200/80 shadow-md flex items-center gap-2 px-2.5 text-[10px] font-bold text-slate-800 select-none cursor-default"
                  >
                    <div className="w-5.5 h-5.5 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center text-[11px] font-extrabold flex-shrink-0 border border-amber-100/50">K</div>
                    <span className="whitespace-nowrap">KCP Plans</span>
                  </motion.div>
                </foreignObject>

                <foreignObject x="450" y="365" width="135" height="50" className="overflow-visible">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full rounded-xl bg-white border border-slate-200/80 shadow-md flex items-center gap-2 px-2.5 text-[10px] font-bold text-slate-800 select-none cursor-default"
                  >
                    <div className="w-5.5 h-5.5 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-[11px] font-extrabold flex-shrink-0 border border-green-100/50">W</div>
                    <span className="whitespace-nowrap">WhatsApp</span>
                  </motion.div>
                </foreignObject>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
