"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  Percent,
  CalendarDays,
  LineChart,
  MessageSquare,
  BarChart4,
  Check,
  ArrowRight
} from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      id: "crm",
      title: "CRM System",
      icon: <UserCheck className="w-6 h-6 text-blue-600" />,
      features: ["Lead Management", "Customer History", "Service Tracking"],
      description: "Unify all dealership sales and customer service records into a single interactive view.",
      badge: "Customer Focus"
    },
    {
      id: "finance",
      title: "Finance & Refinance",
      icon: <Percent className="w-6 h-6 text-emerald-600" />,
      features: ["Loan Processing", "Approval Workflow", "Financial Reporting"],
      description: "Automate matching buyers with optimal lending rates and managing refinance triggers.",
      badge: "Fintech Core"
    },
    {
      id: "kcp",
      title: "KCP (Car Service Plans)",
      icon: <CalendarDays className="w-6 h-6 text-amber-600" />,
      features: ["Service Plan Tracking", "Renewals Coordination", "Customer Retention"],
      description: "Deploy and track customized maintenance packages to retain service department revenue.",
      badge: "Aftersales"
    },
    {
      id: "sales",
      title: "Sales Management",
      icon: <LineChart className="w-6 h-6 text-indigo-600" />,
      features: ["Pipeline Management", "Performance Monitoring", "Inventory Forecasting"],
      description: "Accelerate deal closure with real-time pipeline trackers and automotive inventory links.",
      badge: "Revenue Ops"
    },
    {
      id: "whatsapp",
      title: "WhatsApp Automation",
      icon: <MessageSquare className="w-6 h-6 text-green-600" />,
      features: ["Automated Campaigns", "Service Reminders", "Customer Engagement"],
      description: "Initiate conversational updates, reminders, and confirmations over WhatsApp automatically.",
      badge: "Messaging"
    },
    {
      id: "analytics",
      title: "Business Analytics",
      icon: <BarChart4 className="w-6 h-6 text-purple-600" />,
      features: ["Performance Dashboards", "Financial Reporting", "Inventory Forecasting"],
      description: "Convert raw numbers into clean, interactive diagrams for executive-level planning.",
      badge: "Intelligence"
    }
  ];

  return (
    <section id="solutions" className="bg-slate-50/30 border-y border-slate-100 py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest bg-blue-50/70 border border-blue-100/40 px-3 py-1 rounded-full">
            INTEGRATED SUITE
          </span>
          <h2 className="text-section font-extrabold text-slate-900 tracking-tight mt-4">
            Business Solutions Powered By Data
          </h2>
          <p className="text-body-premium mt-4 text-slate-500">
            Maximize your operational efficiency. Each tool works in sync with our central repository, eliminating information silos.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, index) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-slate-200/60 rounded-2xl p-8 hover:shadow-xl hover:border-blue-100 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                    {sol.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 border border-slate-100/50 px-2 py-0.5 rounded">
                    {sol.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {sol.title}
                </h3>
                
                <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                  {sol.description}
                </p>

                <div className="h-px bg-slate-100 my-6" />

                {/* Features List */}
                <ul className="space-y-3">
                  {sol.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <div className="w-4.5 h-4.5 rounded-full bg-slate-50 text-slate-500 flex items-center justify-center border border-slate-100/80 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-all">
                        <Check className="w-3.5 h-3.5 stroke-[2.5px]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-blue-600 transition-colors cursor-pointer">
                <span>Learn specifications</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
