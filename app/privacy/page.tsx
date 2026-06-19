"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookDemoModal from "@/components/BookDemoModal";
import { ShieldCheck, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "data-collection", title: "2. Information We Collect" },
    { id: "data-usage", title: "3. How We Use Information" },
    { id: "vault-security", title: "4. Data Vault Storage & Security" },
    { id: "data-sharing", title: "5. Information Sharing" },
    { id: "compliance", title: "6. Regulatory Compliance (GDPR, CCPA)" },
    { id: "contact-us", title: "7. Contact Information" }
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100/70 mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              Trust Registry Verified
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Privacy Policy & Data Standards
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
                Policy Outline
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
              
              {/* Introduction */}
              <section id="introduction" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">1. Introduction</h3>
                <p>
                  At Data Vault Technology Group, we recognize the critical importance of privacy, information security, and audit integrity. This Privacy Policy details how we collect, store, clean, analyze, and route information generated when subscribing to our Centralized Data Vault, CRM integrations, finance connectors, KCP service plan systems, and automated WhatsApp campaign APIs.
                </p>
                <p className="mt-4">
                  By accessing or utilizing our platform, you acknowledge and agree that your enterprise data will be governed, normalized, and protected in strict accordance with the controls defined in this document.
                </p>
              </section>

              {/* Information We Collect */}
              <section id="data-collection" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">2. Information We Collect</h3>
                <p>
                  To deliver a unified source of truth for automotive retail networks, our Centralized Data Vault ingests the following parameters:
                </p>
                <ul className="list-disc pl-6 space-y-3 mt-4 text-sm font-semibold text-slate-700">
                  <li>
                    <span className="text-slate-900 font-extrabold">Dealer Management System (DMS) Feeds:</span> Inventory lists, purchase orders, client IDs, test drive schedules, and back-office transaction logs.
                  </li>
                  <li>
                    <span className="text-slate-900 font-extrabold">Customer Profiles:</span> First and last names, work emails, phone coordinates, credit ratings, vehicle identifications (VINs), and historical maintenance logs.
                  </li>
                  <li>
                    <span className="text-slate-900 font-extrabold">Communication Metadata:</span> Delivery states, click rates, reply messages, and campaign templates sent via automated WhatsApp channels.
                  </li>
                  <li>
                    <span className="text-slate-900 font-extrabold">Device Telemetry:</span> Fuel tracking, connected vehicle sensor outputs, and sync delay records logged from car dashboards.
                  </li>
                </ul>
              </section>

              {/* How We Use Information */}
              <section id="data-usage" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">3. How We Use Information</h3>
                <p>
                  All data ingested by the Vault is processed to deliver structured intelligence:
                </p>
                <ul className="list-disc pl-6 space-y-3 mt-4 text-sm font-semibold text-slate-700">
                  <li>To establish unified client database profiles, eliminating duplicate CRM records.</li>
                  <li>To verify refinance rates and credit limits against lending criteria.</li>
                  <li>To dispatch service notifications, recall announcements, and scheduling confirmations.</li>
                  <li>To generate real-time metrics dashboards, financial breakdowns, and inventory projections.</li>
                </ul>
              </section>

              {/* Data Vault Storage & Security */}
              <section id="vault-security" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">4. Data Vault Storage & Security</h3>
                <p>
                  Our architecture is engineered on security best practices:
                </p>
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 mt-4 space-y-4">
                  <p className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-2">Technical Guardrails</p>
                  <p className="text-xs text-slate-500 font-medium">
                    <span className="text-slate-900 font-extrabold">Encryption:</span> In-transit records are secured using TLS 1.3 pipelines. Inactive database states are encrypted using AES-256 blocks.
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    <span className="text-slate-900 font-extrabold">Isolation:</span> Separate virtual logical blocks segregate customer documents between dealership networks, preventing accidental data bleed.
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    <span className="text-slate-900 font-extrabold">Audits:</span> Write-once-read-many (WORM) parameters record changes deterministically, providing complete historical audits for regulatory compliance.
                  </p>
                </div>
              </section>

              {/* Information Sharing */}
              <section id="data-sharing" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">5. Information Sharing</h3>
                <p>
                  We do not rent, monetize, or sell customer databases to advertising networks. Ingestion streams are only shared with third-party components under direct client delegation (e.g. dispatching API coordinates to local finance lenders or registering messages with WhatsApp business channels).
                </p>
              </section>

              {/* Regulatory Compliance */}
              <section id="compliance" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">6. Regulatory Compliance (GDPR, CCPA)</h3>
                <p>
                  Depending on your operating location, users are granted rights regarding their personal profiles. The system maintains direct database deletion pipelines and CSV exportation controls, helping you meet General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA) standards.
                </p>
              </section>

              {/* Contact Information */}
              <section id="contact-us" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">7. Contact Information</h3>
                <p>
                  If you have questions regarding our data policies, SOC-2 certification reports, or database structures, please contact our Information Security office:
                </p>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mt-4 text-xs font-semibold text-slate-700">
                  <p className="text-slate-950 font-bold">Data Vault Technology Trust Team</p>
                  <p className="mt-1">Email: contact@Datavaultcenter.com</p>
                  <p>Address: 2nd floor kataria arcade, nr. Adani vidya mandir, Makarba, Sg-Highway, Ahmedabad, Gujarat 380051</p>
                </div>
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
