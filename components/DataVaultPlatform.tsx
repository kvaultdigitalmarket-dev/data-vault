"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, ShieldAlert, Cpu, Share2, Server, Check } from "lucide-react";

export default function DataVaultPlatform() {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      title: "1. Raw Ingestion Layer",
      subtitle: "Multi-Source Stream Aggregator",
      description: "Our high-throughput data pipelines capture and clean events from ERPs, DMSs, CRM, GPS telemetry, and web channels in real time.",
      icon: <Server className="w-5 h-5" />,
      features: [
        "Bidirectional API Sync & Webhooks",
        "Encrypted socket telemetry links",
        "Automatic schema normalization",
        "Legacy DMS connectors (CDK, Reynolds & Reynolds)"
      ],
      diagram: (
        <svg className="w-full h-full text-blue-600" viewBox="0 0 400 280" fill="none">
          <rect x="20" y="30" width="100" height="40" rx="8" fill="white" stroke="currentColor" strokeWidth="2" />
          <text x="70" y="55" fill="#1E293B" fontSize="12" fontWeight="bold" textAnchor="middle">DMS Systems</text>
          
          <rect x="20" y="120" width="100" height="40" rx="8" fill="white" stroke="currentColor" strokeWidth="2" />
          <text x="70" y="145" fill="#1E293B" fontSize="12" fontWeight="bold" textAnchor="middle">IoT Telemetry</text>
          
          <rect x="20" y="210" width="100" height="40" rx="8" fill="white" stroke="currentColor" strokeWidth="2" />
          <text x="70" y="235" fill="#1E293B" fontSize="12" fontWeight="bold" textAnchor="middle">Marketing APIs</text>

          <path d="M 120 50 H 220 L 250 140" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 120 140 H 250" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 120 230 H 220 L 250 140" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />

          {/* Centralizing Hub */}
          <circle cx="270" cy="140" r="30" fill="#2563EB" />
          <Database className="w-8 h-8 text-white absolute" style={{ top: "124px", left: "254px" }} />
          <motion.circle cx="270" cy="140" r="40" stroke="#2563EB" strokeWidth="1" fill="none" animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0, 0.8] }} transition={{ repeat: Infinity, duration: 2 }} />
        </svg>
      )
    },
    {
      title: "2. Data Vault Core",
      subtitle: "Centralized Intelligence Repository",
      description: "Business logic models, hubs, links, and satellites organize data. Provides deduplicated profiles with total audit history.",
      icon: <Database className="w-5 h-5" />,
      features: [
        "Time-travel query capabilities",
        "Deterministic primary-key hashing",
        "Complete immutable log registers",
        "Automated relationship mapping"
      ],
      diagram: (
        <svg className="w-full h-full text-blue-600" viewBox="0 0 400 280" fill="none">
          {/* Hub & Satellite Core Diagram */}
          <circle cx="200" cy="140" r="35" fill="#F8FAFC" stroke="currentColor" strokeWidth="3" />
          <text x="200" y="144" fill="currentColor" fontSize="12" fontWeight="bold" textAnchor="middle">Hub: Customer</text>

          <line x1="200" y1="105" x2="200" y2="50" stroke="#94A3B8" strokeWidth="2" />
          <circle cx="200" cy="50" r="25" fill="#2563EB" />
          <text x="200" y="54" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">Sat: Bio</text>

          <line x1="235" y1="140" x2="310" y2="140" stroke="#94A3B8" strokeWidth="2" />
          <circle cx="310" cy="140" r="25" fill="#2563EB" />
          <text x="310" y="144" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">Sat: Fin</text>

          <line x1="200" y1="175" x2="200" y2="230" stroke="#94A3B8" strokeWidth="2" />
          <circle cx="200" cy="230" r="25" fill="#2563EB" />
          <text x="200" y="234" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">Sat: Serv</text>

          <line x1="165" y1="140" x2="90" y2="140" stroke="#94A3B8" strokeWidth="2" />
          <circle cx="90" cy="140" r="25" fill="#2563EB" />
          <text x="90" y="144" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">Link: Sales</text>
        </svg>
      )
    },
    {
      title: "3. Processing & Analytics Engine",
      subtitle: "Real-time Operations & Inference",
      description: "Aggregations, triggers, and predictive scores run continuously. Models calculate customer lifetime value, finance risk, and service needs.",
      icon: <Cpu className="w-5 h-5" />,
      features: [
        "Framer service prediction alerts",
        "Refinance qualification triggers",
        "Stripe-like billing automations",
        "Predictive customer health indexing"
      ],
      diagram: (
        <svg className="w-full h-full text-blue-600" viewBox="0 0 400 280" fill="none">
          {/* Micro Processing Nodes */}
          <rect x="50" y="70" width="120" height="50" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2" />
          <text x="110" y="94" fill="#64748B" fontSize="10" fontWeight="bold" textAnchor="middle">RAW STORAGE</text>

          <path d="M 170 95 H 230" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrow)" />
          
          <rect x="230" y="70" width="120" height="50" rx="8" fill="white" stroke="#2563EB" strokeWidth="2" />
          <text x="290" y="94" fill="#2563EB" fontSize="10" fontWeight="bold" textAnchor="middle">CALCULATE SCORES</text>

          <path d="M 290 120 V 170" stroke="#10B981" strokeWidth="2" />
          
          <rect x="230" y="170" width="120" height="50" rx="8" fill="white" stroke="#10B981" strokeWidth="2" />
          <text x="290" y="194" fill="#10B981" fontSize="10" fontWeight="bold" textAnchor="middle">ANALYTICS PREP</text>

          <motion.circle cx="200" cy="95" r="5" fill="#3B82F6" animate={{ x: [0, 60, 0] }} transition={{ repeat: Infinity, duration: 2 }} />
        </svg>
      )
    },
    {
      title: "4. Unified SaaS Delivery",
      subtitle: "Omnichannel API Brokerage",
      description: "Secure routing delivers formatted data to integrated services. Powers customer lifecycle interfaces, service centers, and automated text channels.",
      icon: <Share2 className="w-5 h-5" />,
      features: [
        "Low-latency REST / GraphQL APIs",
        "Secure WhatsApp messaging pipes",
        "Synchronized CRM interfaces",
        "Role-based secure access tokens"
      ],
      diagram: (
        <svg className="w-full h-full text-blue-600" viewBox="0 0 400 280" fill="none">
          {/* Data Distribution flow */}
          <circle cx="80" cy="140" r="30" fill="#F8FAFC" stroke="currentColor" strokeWidth="2" />
          <text x="80" y="144" fill="#1E293B" fontSize="10" fontWeight="bold" textAnchor="middle">Vault Core</text>

          <line x1="110" y1="140" x2="250" y2="140" stroke="#CBD5E1" strokeWidth="2" />

          {/* Target connections */}
          <path d="M 250 140 L 300 60" stroke="#2563EB" strokeWidth="2" strokeDasharray="3 3" />
          <rect x="300" y="40" width="80" height="30" rx="6" fill="white" stroke="#2563EB" strokeWidth="1.5" />
          <text x="340" y="58" fill="#2563EB" fontSize="9" fontWeight="bold" textAnchor="middle">CRM & Sales</text>

          <path d="M 250 140 H 300" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
          <rect x="300" y="125" width="80" height="30" rx="6" fill="white" stroke="#10B981" strokeWidth="1.5" />
          <text x="340" y="143" fill="#10B981" fontSize="9" fontWeight="bold" textAnchor="middle">WhatsApp</text>

          <path d="M 250 140 L 300 220" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="3 3" />
          <rect x="300" y="205" width="80" height="30" rx="6" fill="white" stroke="#8B5CF6" strokeWidth="1.5" />
          <text x="340" y="223" fill="#8B5CF6" fontSize="9" fontWeight="bold" textAnchor="middle">Refinance</text>
        </svg>
      )
    }
  ];

  return (
    <section id="platform" className="bg-white py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-20">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest bg-blue-50/70 border border-blue-100/40 px-3 py-1 rounded-full">
            Vault Engine Architecture
          </span>
          <h2 className="text-section font-extrabold text-slate-900 tracking-tight mt-4">
            One Source of Truth For Your Entire Business
          </h2>
          <p className="text-body-premium mt-4 max-w-2xl text-slate-500">
            Most automotive businesses operate through disconnected systems. Our centralized Data Vault architecture brings all customer, finance, sales, and service data into one intelligent platform.
          </p>
        </div>

        {/* Interactive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Tab Selectors */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {layers.map((layer, idx) => (
              <button
                key={layer.title}
                onClick={() => setActiveLayer(idx)}
                className={`text-left p-6 rounded-2xl border transition-all cursor-pointer flex gap-4 items-start ${
                  activeLayer === idx
                    ? "bg-white border-blue-200 shadow-md shadow-blue-500/5 ring-1 ring-blue-500/5"
                    : "bg-slate-50/50 border-slate-100 hover:bg-slate-50 hover:border-slate-200"
                }`}
              >
                <div className={`p-2.5 rounded-xl border ${
                  activeLayer === idx
                    ? "bg-blue-50 text-blue-600 border-blue-100"
                    : "bg-white text-slate-400 border-slate-100"
                }`}>
                  {layer.icon}
                </div>
                <div>
                  <h3 className={`text-base font-bold transition-colors ${
                    activeLayer === idx ? "text-blue-600" : "text-slate-800"
                  }`}>
                    {layer.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
                    {layer.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Visualization & Details */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100/70 rounded-3xl p-8 min-h-[460px] flex flex-col justify-between relative overflow-hidden">
            {/* Visual Aura */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-100/20 rounded-full blur-[80px] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full z-10"
              >
                {/* Details text */}
                <div className="flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-slate-900 leading-tight">
                    {layers[activeLayer].title}
                  </h4>
                  <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mt-1">
                    {layers[activeLayer].subtitle}
                  </p>
                  
                  <p className="text-sm text-slate-500 mt-4 leading-relaxed">
                    {layers[activeLayer].description}
                  </p>

                  <div className="h-px bg-slate-200/60 my-6" />

                  {/* Bullet points */}
                  <ul className="space-y-3">
                    {layers[activeLayer].features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                        <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100/50 mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 stroke-[3px]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Animated Diagram */}
                <div className="bg-white rounded-2xl border border-slate-200/50 shadow-sm aspect-video md:aspect-square flex items-center justify-center overflow-hidden p-4 relative">
                  {layers[activeLayer].diagram}
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
