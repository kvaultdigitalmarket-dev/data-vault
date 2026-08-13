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
    { id: "fees", title: "3. Fees, Billing & GST" },
    { id: "acceptable-use", title: "4. Acceptable Use & Messaging" },
    { id: "ip", title: "5. Intellectual Property" },
    { id: "liability", title: "6. Limitation of Liability" },
    { id: "termination", title: "7. Termination" },
    { id: "governing-law", title: "8. Governing Law" }
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
              Last Updated: August 13, 2026
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
                  These Terms &amp; Conditions apply to the use of the software and services provided by Data Vault Center, an automotive technology company based in Ahmedabad, India. By signing up or using our platform, your dealership agrees to these terms.
                </p>
              </section>

              {/* Scope of Service */}
              <section id="scope" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">2. Scope of Service</h3>
                <p>
                  We provide a cloud-based CRM and ERP platform for car sales and service businesses. This includes tools for leads, sales, service, inventory, finance, and customer messaging. We aim to keep the platform available and reliable, but occasional maintenance or downtime may occur.
                </p>
              </section>

              {/* Fees, Billing & GST */}
              <section id="fees" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">3. Fees, Billing &amp; GST</h3>
                <p>
                  Fees are quoted in Indian Rupees (INR) and are subject to GST as per Indian law. Invoices are payable within the agreed period, and overdue payments may lead to a temporary pause in service until dues are cleared.
                </p>
              </section>

              {/* Acceptable Use & Messaging */}
              <section id="acceptable-use" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">4. Acceptable Use &amp; Messaging</h3>
                <p>
                  You are responsible for how you use the platform and how you communicate with your customers. In particular, you agree to only use data you are allowed to use, to get proper consent before sending WhatsApp, SMS, or email messages, and to follow WhatsApp and applicable Indian messaging rules. The platform must not be used for spam or any unlawful activity.
                </p>
              </section>

              {/* Intellectual Property */}
              <section id="ip" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">5. Intellectual Property</h3>
                <p>
                  We own the platform, including its software and design. You keep full ownership of your own business and customer data that you store or manage through the platform.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section id="liability" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h3>
                <p>
                  We work hard to keep the platform running smoothly, but we are not responsible for losses caused by things outside our control, such as internet outages, third-party system failures, or delays from messaging providers. Our liability is limited to the fees you have paid us in the previous twelve months.
                </p>
              </section>

              {/* Termination */}
              <section id="termination" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">7. Termination</h3>
                <p>
                  Either side may end the subscription with reasonable written notice. After the subscription ends, your data will be available to export for a limited time and then removed from our active systems.
                </p>
              </section>

              {/* Governing Law */}
              <section id="governing-law" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-slate-900 mb-4">8. Governing Law</h3>
                <p>
                  These terms are governed by the laws of India, and any disputes will be handled by the courts of Ahmedabad, Gujarat.
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
