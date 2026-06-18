"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2, ArrowRight } from "lucide-react";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset form on close
      setTimeout(() => {
        setFormData({ name: "", email: "", company: "", phone: "", message: "" });
        setErrors({});
        setIsSuccess(false);
        setIsSubmitting(false);
      }, 300);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please provide a valid work email";
    }
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-2xl p-6 md:p-8 z-10"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-1.5 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form-view"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100 mb-3">
                      Enterprise Suite
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                      Schedule a Live Demo
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      See how our Centralized Data Vault can unlock growth for your automotive business.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50 border-slate-200 text-slate-900 ${
                          errors.name ? "border-red-300 bg-red-50/20" : ""
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1 font-medium">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                          Work Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50 border-slate-200 text-slate-900 ${
                            errors.email ? "border-red-300 bg-red-50/20" : ""
                          }`}
                          placeholder="jdoe@company.com"
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50 border-slate-200 text-slate-900 ${
                            errors.phone ? "border-red-300 bg-red-50/20" : ""
                          }`}
                          placeholder="+1 (555) 000-0000"
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50 border-slate-200 text-slate-900 ${
                          errors.company ? "border-red-300 bg-red-50/20" : ""
                        }`}
                        placeholder="Automotive Group"
                      />
                      {errors.company && <p className="text-xs text-red-500 mt-1 font-medium">{errors.company}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        How can we help you?
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-slate-50 text-slate-900 resize-none"
                        placeholder="Tell us about your dealerships, locations, or database configuration..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all text-sm mt-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Scheduling Demo...
                        </>
                      ) : (
                        <>
                          Request Live Demo
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-slate-400 text-center mt-3">
                      By submitting, you agree to our Terms & Privacy. We will never share your email.
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 text-emerald-500 mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Demo Request Received!
                  </h3>
                  <p className="text-sm text-slate-500 mt-2 max-w-sm">
                    Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. An enterprise integration strategist from the <span className="font-semibold text-slate-800">{formData.company}</span> team will contact you shortly to schedule your live walkthrough.
                  </p>

                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mt-6 w-full text-left">
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Estimated Contact Time</p>
                    <p className="text-sm font-medium text-slate-800 mt-0.5">Within 2 hours (Mon - Fri, 9AM - 6PM EST)</p>
                  </div>

                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-slate-950 hover:bg-slate-800 text-white rounded-lg text-sm font-medium transition-colors mt-8 cursor-pointer"
                  >
                    Return to Platform
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
