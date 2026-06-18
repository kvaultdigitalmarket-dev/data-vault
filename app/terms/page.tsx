"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookDemoModal from "@/components/BookDemoModal";
import { Scale, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsAndConditions() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "scope", title: "2. Scope of Service" },
    { id: "fees", title: "3. Account Fees & Billing" },
    { id: "ip", title: "4. Intellectual Property" },
    { id: "liability", title: "5. Limitation of Liability" },
    { id: "termination", title: "6. Agreement Termination" },
    { id: "governing-law", title: "7. Governing Law" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar onBookDemoClick={openDemoModal} />

      <main className="flex-grow pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Breadcrumb / Return */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 uppercase tracking-widest hover:text-blue-700 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              Return to Platform
            </Link>
          </div>

          {/* Heading */}
          <div className="max-w-4xl border-b border-slate-200 pb-10 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100/70 mb-4">
              <Scale className="w-3.5 h-3.5" />
              Enterprise Terms Active
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Terms & Conditions of Service
            </h1>
            <p className="text-sm text-slate-500 flex items-center gap-1.5 mt-3 font-medium">
              <Calendar className="w-4 h-4" />
              Last Updated: June 18, 2026
            </p>
          </div>

          {/* Core Layout: Left Side Nav, Right Scrollable content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column Sidebar */}
            <aside className="lg:col-span-4 sticky top-28 hidden lg:block bg-slate-50 border border-slate-200/60 p-6 rounded-2xl">
              <h2 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-4">
                Terms Outline
              </h2>
              <nav className="flex flex-col gap-2">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="text-xs font-semibold text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all py-1.5 border-l-2 border-transparent hover:border-blue-600 pl-3"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Right Column Content */}
            <div className="lg:col-span-8 text-body-premium text-slate-600 space-y-10 font-normal leading-relaxed">
              
              {/* Acceptance */}
              <section id="acceptance" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h3>
                <p>
                  These Terms and Conditions of Service ("Agreement") govern the license, subscription, and access to all database systems, APIs, user portals, and software tools provided by Data Vault Technology Group. By executing a digital order sheet, registering a user account, or utilizing the Data Vault platform, your automotive group ("Client") agrees to be bound by these conditions.
                </p>
                <p className="mt-4">
                  If you are executing this Agreement on behalf of a multi-location dealer group, franchised showroom, or financial provider, you represent that you hold the legal authority to bind that entity to these conditions.
                </p>
              </section>

              {/* Scope of Service */}
              <section id="scope" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">2. Scope of Service</h3>
                <p>
                  Data Vault Technology Group provides a centralized SaaS data warehousing layer:
                </p>
                <ul className="list-disc pl-6 space-y-3 mt-4 text-sm font-semibold text-slate-700">
                  <li>
                    <span className="text-slate-900 font-extrabold">Service Uptime:</span> We target a 99.99% system availability rate for API endpoint requests, calculated monthly.
                  </li>
                  <li>
                    <span className="text-slate-900 font-extrabold">Data Hosting:</span> Customer records, inventory lists, and finance logs are stored within secure virtual cloud server nodes.
                  </li>
                  <li>
                    <span className="text-slate-900 font-extrabold">Integrations:</span> While we provide API connectors for standard DMS brands, operational uptime of third-party software remains the responsibility of their respective providers.
                  </li>
                </ul>
              </section>

              {/* Fees & Billing */}
              <section id="fees" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">3. Account Fees & Billing</h3>
                <p>
                  Subscriptions are billed in monthly cycles, unless specified otherwise in an Enterprise Agreement:
                </p>
                <ul className="list-disc pl-6 space-y-3 mt-4 text-sm font-semibold text-slate-700">
                  <li>Invoicing occurs on the first calendar day of each month. Payments are due within 30 days.</li>
                  <li>Unpaid subscriptions exceeding 15 days past due are subject to temporary service suspension.</li>
                  <li>Platform pricing is based on active location counts, active DMS sync instances, and WhatsApp messaging volumes.</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section id="ip" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">4. Intellectual Property</h3>
                <p>
                  Data Vault Technology Group retains all ownership, patents, design designs, and copyright interests relating to our databases, dashboard modules, styling structures, and automated scheduling systems. The Client retains absolute ownership and legal control of all customer records, transactions, and inventories routed through or stored within the Vault.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section id="liability" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h3>
                <p>
                  To the maximum extent permitted by law, Data Vault Technology Group shall not be liable for indirect, incidental, special, or consequential damages, including but not limited to loss of business revenues, profit records, or system interruptions resulting from third-party DMS outages, internet access failures, or data sync delays.
                </p>
              </section>

              {/* Termination */}
              <section id="termination" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">6. Agreement Termination</h3>
                <p>
                  Either party may terminate a subscription by providing 30 days written notice prior to the next billing cycle. Upon termination, client databases will remain accessible for exportation for 60 days, after which they will be permanently scrubbed from our active data layers.
                </p>
              </section>

              {/* Governing Law */}
              <section id="governing-law" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">7. Governing Law</h3>
                <p>
                  This Agreement, and any disputes arising from your use of the platform, will be governed by and constructed in accordance with the laws of the State of New York, without giving effect to conflicts of law guidelines.
                </p>
              </section>

            </div>

          </div>

        </div>
      </main>

      {/* Sitemap Footer */}
      <Footer onBookDemoClick={openDemoModal} />

      {/* Booking Dialog Modal */}
      <BookDemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </div>
  );
}
