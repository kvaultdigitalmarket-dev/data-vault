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
    { id: "vault-security", title: "4. Data Storage & Security" },
    { id: "your-rights", title: "5. Data Retention & Your Rights" },
    { id: "contact-us", title: "6. Contact" }
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
              Last Updated: August 13, 2026
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
                  Data Vault Center is an automotive technology company based in Ahmedabad, India, that builds CRM, ERP, and dealer engagement software for car sales and service businesses. This Privacy Policy explains how we handle the information generated when you and your dealership use our platform.
                </p>
                <p className="mt-4">
                  We handle this data on behalf of the dealerships and automotive groups who use the platform, in line with applicable Indian law, including the Digital Personal Data Protection Act, 2023.
                </p>
              </section>

              {/* Information We Collect */}
              <section id="data-collection" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">2. Information We Collect</h3>
                <p>
                  To deliver a unified source of truth for automotive retail networks, the Platform processes the following categories of information:
                </p>
                <ul className="list-disc pl-6 space-y-3 mt-4 text-sm font-semibold text-slate-700">
                  <li>
                    <span className="text-slate-900 font-extrabold">Account &amp; User Data:</span> Names, business email addresses, roles, and login credentials of dealership staff who access the Platform.
                  </li>
                  <li>
                    <span className="text-slate-900 font-extrabold">Dealer Management System (DMS) Feeds:</span> Vehicle inventory, purchase and booking orders, test-drive schedules, service job cards, and back-office transaction logs.
                  </li>
                  <li>
                    <span className="text-slate-900 font-extrabold">End-Customer Records (processed for Clients):</span> Names, contact details, vehicle identification numbers (VINs), registration and finance details, and service history that a Client uploads or syncs to run its CRM and ERP workflows.
                  </li>
                  <li>
                    <span className="text-slate-900 font-extrabold">Messaging Metadata:</span> Opt-in status, delivery and read receipts, template identifiers, and reply status for WhatsApp, SMS, and email communications sent on a Client&apos;s behalf.
                  </li>
                  <li>
                    <span className="text-slate-900 font-extrabold">Usage &amp; Device Data:</span> Log data, IP address, browser type, and feature-usage records used to secure and improve the Platform.
                  </li>
                </ul>
              </section>

              {/* How We Use Information */}
              <section id="data-usage" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">3. How We Use Information</h3>
                <p>
                  Information processed through the Platform is used to:
                </p>
                <ul className="list-disc pl-6 space-y-3 mt-4 text-sm font-semibold text-slate-700">
                  <li>Provide unified CRM and ERP profiles and remove duplicate customer records for our Clients.</li>
                  <li>Support sales, finance, refinance, and KCP service-plan workflows configured by the Client.</li>
                  <li>Send service reminders, booking confirmations, and campaign messages that end-customers have opted in to receive.</li>
                  <li>Generate dashboards, sales and inventory analytics, and operational reports for the Client.</li>
                  <li>Maintain security, prevent fraud and abuse, and meet our legal obligations.</li>
                </ul>
                <p className="mt-4">
                  We do not use end-customer personal data for our own independent marketing, and we do not sell it.
                </p>
              </section>

              {/* Data Storage & Security */}
              <section id="vault-security" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">4. Data Storage &amp; Security</h3>
                <p>
                  We take reasonable steps to keep your data safe. Information is stored securely on trusted cloud servers, and access is limited to authorised staff who need it to run the platform. Each dealership&apos;s data is kept separate from others, and platform data is primarily hosted in India.
                </p>
              </section>

              {/* Data Retention & Your Rights */}
              <section id="your-rights" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">5. Data Retention &amp; Your Rights</h3>
                <p>
                  We retain Platform data for as long as a Client&apos;s subscription is active and as required to provide the service or meet legal obligations. On termination, Client data is available for export for a limited period and is then deleted from active systems, subject to backup rotation cycles.
                </p>
                <p className="mt-4">
                  Under the DPDP Act and comparable laws, individuals may request access to, correction of, or erasure of their personal data, and may withdraw consent. Because we act as a processor, such requests from end-customers are generally directed to the relevant dealership (the data fiduciary), and we will support the Client in fulfilling them.
                </p>
              </section>

              {/* Contact */}
              <section id="contact-us" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">6. Contact</h3>
                <p>
                  If you have any questions about this Privacy Policy, please reach out to us:
                </p>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mt-4 text-xs font-semibold text-slate-700">
                  <p className="text-slate-950 font-bold">Data Vault Center</p>
                  <p className="mt-1">Email: contact@datavaultcenter.com</p>
                  <p>Address: 2nd Floor, Kataria Arcade, nr. Adani Vidya Mandir, Makarba, SG Highway, Ahmedabad, Gujarat 380051, India</p>
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
