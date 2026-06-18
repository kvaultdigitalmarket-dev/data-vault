"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  RotateCw,
  MessageSquare,
  Users2,
  Calendar,
  Layers,
  ArrowUpRight,
  TrendingDown,
  Globe2
} from "lucide-react";

interface FeedItem {
  id: string;
  app: "CRM" | "FIN" | "KCP" | "WA" | "SYS";
  message: string;
  time: string;
  status: "success" | "info" | "warning";
}

export default function DashboardPreview() {
  const [feed, setFeed] = useState<FeedItem[]>([
    { id: "1", app: "CRM", message: "Customer profile matched & synced (Lead #4289)", time: "2s ago", status: "success" },
    { id: "2", app: "WA", message: "WhatsApp KCP service renewal notice delivered", time: "1m ago", status: "info" },
    { id: "3", app: "FIN", message: "$38,400 Refinance loan application auto-approved", time: "3m ago", status: "success" },
    { id: "4", app: "KCP", message: "24-Month maintenance plan renewal registered", time: "5m ago", status: "success" },
    { id: "5", app: "SYS", message: "Telemetry packet ingested from Connected Vehicle #192", time: "8m ago", status: "info" },
  ]);

  // Simulate real-time updates to the feed
  useEffect(() => {
    const messages = [
      { app: "CRM" as const, message: "New test drive scheduled (Dealer ID: 9021)", status: "success" as const },
      { app: "WA" as const, message: "Automated WhatsApp feedback request answered", status: "info" as const },
      { app: "FIN" as const, message: "Refinance savings rate recalculation trigger fired", status: "success" as const },
      { app: "KCP" as const, message: "Service plan status updated to 'Active' for VIN 890X", status: "success" as const },
      { app: "SYS" as const, message: "Batch syncing completed for location 'Midwest Hub'", status: "info" as const },
    ];

    const interval = setInterval(() => {
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      const newItem: FeedItem = {
        id: Date.now().toString(),
        app: randomMsg.app,
        message: randomMsg.message,
        time: "Just now",
        status: randomMsg.status
      };
      
      setFeed(prev => [newItem, ...prev.slice(0, 4)].map((item, idx) => {
        if (idx > 0) {
          // Update durations
          const seconds = idx * 1.5;
          return { ...item, time: `${Math.round(seconds)}m ago` };
        }
        return item;
      }));
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-32 relative overflow-hidden">
      {/* Decorative Aura background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest bg-blue-50/70 border border-blue-100/40 px-3 py-1 rounded-full">
            REAL-TIME INTELLIGENCE
          </span>
          <h2 className="text-section font-extrabold text-slate-900 tracking-tight mt-4">
            Insights That Drive Decisions
          </h2>
          <p className="text-body-premium mt-4 text-slate-500">
            Monitor transaction health, customer lifecycle indices, and automated marketing conversions inside an enterprise platform designed for scale.
          </p>
        </div>

        {/* Dashboard Shell */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.1 }}
          className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-w-6xl mx-auto"
        >
          {/* Dashboard Top Navigation Bar Mockup */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-blue-600 flex items-center justify-center text-[7px] text-white font-extrabold font-mono">D</span>
              <span className="font-bold text-slate-800 text-sm tracking-tight">Vault Intelligence Portal</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 animate-pulse">
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                Live Sync Active
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-600 select-none">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Last 30 Days</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-600 select-none">
                <Globe2 className="w-3.5 h-3.5 text-slate-400" />
                <span>All Locations (14)</span>
              </div>
            </div>
          </div>

          {/* Stats Bar Grid (4 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-slate-200 bg-slate-50/20">
            {/* Stat 1 */}
            <div className="p-6 border-r border-b md:border-b-0 border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start text-slate-400">
                  <span className="text-xs font-bold uppercase tracking-wider">Revenue Growth</span>
                  <div className="p-1 rounded bg-blue-50 text-blue-600"><TrendingUp className="w-4 h-4" /></div>
                </div>
                <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-2">$2,481,200</h4>
              </div>
              <p className="text-xs text-slate-400 mt-4 flex items-center gap-1 font-medium">
                <span className="text-emerald-500 font-bold flex items-center gap-0.5"><ArrowUpRight className="w-3 h-3" />+12.4%</span> vs last month
              </p>
            </div>
            {/* Stat 2 */}
            <div className="p-6 border-r border-b md:border-b-0 border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start text-slate-400">
                  <span className="text-xs font-bold uppercase tracking-wider">Service Plan Renewals</span>
                  <div className="p-1 rounded bg-emerald-50 text-emerald-600"><RotateCw className="w-4 h-4" /></div>
                </div>
                <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-2">84.2%</h4>
              </div>
              <p className="text-xs text-slate-400 mt-4 flex items-center gap-1 font-medium">
                <span className="text-emerald-500 font-bold flex items-center gap-0.5"><ArrowUpRight className="w-3 h-3" />+3.1%</span> vs industry avg
              </p>
            </div>
            {/* Stat 3 */}
            <div className="p-6 border-r border-b md:border-b-0 border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start text-slate-400">
                  <span className="text-xs font-bold uppercase tracking-wider">Customer Retention</span>
                  <div className="p-1 rounded bg-purple-50 text-purple-600"><Users2 className="w-4 h-4" /></div>
                </div>
                <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-2">94.8%</h4>
              </div>
              <p className="text-xs text-slate-400 mt-4 flex items-center gap-1 font-medium">
                <span className="text-emerald-500 font-bold flex items-center gap-0.5"><ArrowUpRight className="w-3 h-3" />+1.8%</span> target threshold
              </p>
            </div>
            {/* Stat 4 */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start text-slate-400">
                  <span className="text-xs font-bold uppercase tracking-wider">WhatsApp Delivery CTR</span>
                  <div className="p-1 rounded bg-green-50 text-green-600"><MessageSquare className="w-4 h-4" /></div>
                </div>
                <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-2">18.4%</h4>
              </div>
              <p className="text-xs text-slate-400 mt-4 flex items-center gap-1 font-medium">
                <span className="text-red-500 font-bold flex items-center gap-0.5"><TrendingDown className="w-3 h-3" />-0.2%</span> template update due
              </p>
            </div>
          </div>

          {/* Main Visual Panels Grid (2/3 and 1/3) */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Large Revenue Chart (2/3 Column) */}
            <div className="lg:col-span-8 p-6 border-r border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h5 className="font-bold text-slate-800 text-sm">Revenue Growth & Retention Projections</h5>
                  <p className="text-xs text-slate-400">Visualizing platform performance metrics over 6 months</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    Central Vault
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    Legacy Standard
                  </span>
                </div>
              </div>

              {/* Vector SVG Line Chart */}
              <div className="w-full aspect-[2] md:aspect-[2.3] flex items-end justify-center bg-slate-50/50 rounded-2xl border border-slate-200/50 p-4 relative">
                <svg className="w-full h-full text-blue-600" viewBox="0 0 500 200" fill="none" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="40" x2="500" y2="40" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="80" x2="500" y2="80" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="120" x2="500" y2="120" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="160" x2="500" y2="160" stroke="#f1f5f9" strokeWidth="1" />

                  {/* Gradient Fill under Central Vault Line */}
                  <path d="M 0 160 Q 100 120 200 110 T 400 60 T 500 40 V 200 H 0 Z" fill="url(#blue-grad)" opacity="0.08" />

                  {/* Legacy Line */}
                  <path d="M 0 170 Q 100 160 200 155 T 400 145 T 500 140" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />

                  {/* Central Vault Line */}
                  <path d="M 0 160 Q 100 120 200 110 T 400 60 T 500 40" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" />

                  {/* Chart Definitions */}
                  <defs>
                    <linearGradient id="blue-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Dynamic Nodes */}
                  <circle cx="200" cy="110" r="4" fill="#2563EB" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="400" cy="60" r="4" fill="#2563EB" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="500" cy="40" r="4" fill="#2563EB" stroke="#ffffff" strokeWidth="1.5" />
                </svg>

                {/* X Axis Labels */}
                <div className="absolute bottom-2 left-6 right-6 flex justify-between text-[9px] font-bold text-slate-400">
                  <span>JAN</span>
                  <span>FEB</span>
                  <span>MAR</span>
                  <span>APR</span>
                  <span>MAY</span>
                  <span>JUN</span>
                </div>
              </div>
            </div>

            {/* Ingestion Feed (1/3 Column) */}
            <div className="lg:col-span-4 p-6 bg-slate-50/20">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h5 className="font-bold text-slate-800 text-sm">Sync Operations Feed</h5>
                  <p className="text-xs text-slate-400">Real-time data ingestion streams</p>
                </div>
              </div>

              {/* Feed Container */}
              <div className="space-y-4">
                {feed.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 items-start text-xs border border-slate-100 bg-white p-3.5 rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                  >
                    <div className={`w-1.5 absolute top-0 bottom-0 left-0 ${
                      item.app === "CRM" ? "bg-emerald-500" :
                      item.app === "WA" ? "bg-green-500" :
                      item.app === "FIN" ? "bg-blue-600" :
                      item.app === "KCP" ? "bg-amber-500" : "bg-indigo-500"
                    }`} />
                    
                    <div className="flex-1 pl-1">
                      <div className="flex justify-between items-center">
                        <span className="font-extrabold text-slate-800 text-[10px] uppercase tracking-wider">
                          {item.app === "CRM" ? "CRM Synced" :
                           item.app === "WA" ? "WhatsApp API" :
                           item.app === "FIN" ? "Finance Approval" :
                           item.app === "KCP" ? "Service Plan" : "System Core"}
                        </span>
                        <span className="text-[9px] text-slate-400 font-semibold">{item.time}</span>
                      </div>
                      <p className="text-slate-500 mt-1 leading-normal font-medium">{item.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
