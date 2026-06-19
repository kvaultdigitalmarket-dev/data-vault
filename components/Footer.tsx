"use client";

import React from "react";
import Link from "next/link";
import { Database, ArrowRight, MessageSquare, ShieldAlert, Cpu } from "lucide-react";

interface FooterProps {
  onBookDemoClick: () => void;
}

export default function Footer({ onBookDemoClick }: FooterProps) {
  const sections = [
    {
      title: "Platform",
      links: [
        { name: "Core Vault Engine", href: "#platform" },
        { name: "Processing Pipeline", href: "#platform" },
        { name: "Enterprise Security", href: "#why-us" },
        { name: "Real-time Connectors", href: "#platform" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "CRM System", href: "#solutions" },
        { name: "Finance & Refinance", href: "#solutions" },
        { name: "KCP Service Plans", href: "#solutions" },
        { name: "Sales Management", href: "#solutions" },
        { name: "WhatsApp Automation", href: "#solutions" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Franchised Dealerships", href: "#industries" },
        { name: "Auto Service Centers", href: "#industries" },
        { name: "Multi-Location Groups", href: "#industries" },
        { name: "Auto Finance Providers", href: "#industries" },
        { name: "Warranty Providers", href: "#industries" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Developer Documentation", href: "#" },
        { name: "System Status SLA", href: "#" },
        { name: "Enterprise Security Trust", href: "#" },
        { name: "Automotive Case Studies", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers (Hiring)", href: "#" },
        { name: "Security & Trust", href: "#" },
        { name: "Contact Team", href: "#contact" }
      ]
    }
  ];

  return (
    <footer id="contact" className="bg-slate-50 border-t border-slate-200 pt-24 pb-12 relative overflow-hidden">
      
      {/* Accent visual gradient for final CTA */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-100/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* FINAL CTA SECTION */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-slate-100/50 mb-24 relative overflow-hidden">
          {/* Subtle background nodes */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full border border-slate-100 flex items-center justify-center translate-x-8 -translate-y-8">
            <Cpu className="w-8 h-8 text-blue-100" />
          </div>

          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Your Business Generates Data Every Day.
          </h3>
          <p className="text-lg text-slate-500 mt-4 max-w-xl mx-auto font-normal">
            We help you turn it into growth. Schedule a custom integration assessment with our engineering team today.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={onBookDemoClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onBookDemoClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-full border border-slate-200 transition-all cursor-pointer"
            >
              Contact Sales
            </button>
          </div>
        </div>

        {/* FOOTER SITEMAP GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-16 border-b border-slate-200">
          {sections.map((sec) => (
            <div key={sec.title} className="flex flex-col gap-4">
              <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-widest">
                {sec.title}
              </h4>
              <ul className="space-y-2.5">
                {sec.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM METADATA & LEGAL BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white shadow shadow-blue-500/10">
              <Database className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-800 tracking-tight">
              DATA<span className="text-blue-600 font-semibold">VAULT</span>
            </span>
            <span className="text-slate-300 text-xs">|</span>
            <span className="text-xs text-slate-400 font-medium select-none">
              © 2026 Data Vault. Operated by Kataria Tech, a division of Kataria Group. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold text-slate-500">
            <Link href="/privacy" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-600 transition-colors">
              Terms & Conditions
            </Link>
            <a href="#platform" className="hover:text-blue-600 transition-colors">
              Uptime Status
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
