"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import DataVaultPlatform from "@/components/DataVaultPlatform";
import Solutions from "@/components/Solutions";
import DashboardPreview from "@/components/DashboardPreview";
import AutomotiveIndustry from "@/components/AutomotiveIndustry";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import BookDemoModal from "@/components/BookDemoModal";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Dynamic Elevation Top Navbar */}
      <Navbar onBookDemoClick={openDemoModal} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Area + Flow Animation */}
        <Hero onBookDemoClick={openDemoModal} />
        
        {/* Credibility Counter Statistics */}
        <Trust />
        
        {/* Core Architecture Layer Visualization */}
        <DataVaultPlatform />
        
        {/* Product Modules Grid */}
        <Solutions />
        
        {/* Dynamic Analytics & Live Log Streams Mockup */}
        <DashboardPreview />
        
        {/* Segment Alignments (Dealers, Groups, Lenders, etc.) */}
        <AutomotiveIndustry />
        
        {/* Process Steps Timeline */}
        <HowItWorks />
        
        {/* Benefit Differentiators Checklists */}
        <WhyUs />
        
        {/* Partner Reviews & Quotes */}
        <Testimonials />
      </main>

      {/* Footer Sitemap + Final CTA Banner */}
      <Footer onBookDemoClick={openDemoModal} />

      {/* Global Modals overlay */}
      <BookDemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </div>
  );
}
