"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CallbackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setStatus("submitting");

    // Simulate callback request
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <div className="lead-form_card p-6 md:p-8 flex flex-col gap-6 w-full max-w-md bg-white border border-brand-tint rounded-2xl shadow-xl">
      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-6 flex flex-col gap-3"
        >
          <div className="w-12 h-12 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center mx-auto">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-brand-dark">
            Thanks! You&apos;re all set.
          </h3>
          <p className="text-sm text-brand-gray">
            Our clinic team will call you back within 10 minutes.
          </p>
        </motion.div>
      ) : (
        <>
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-brand-dark">Book a visit</h3>
            <p className="text-xs text-brand-gray">
              Get a callback within 10 minutes from our dental assistants
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                disabled={status === "submitting"}
                className="w-full h-11 px-4 text-sm bg-brand-cream/30 border border-brand-tint rounded-xl text-brand-dark placeholder-brand-gray/60 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all disabled:opacity-50"
              />
            </div>

            <div className="flex flex-col gap-1">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                required
                disabled={status === "submitting"}
                className="w-full h-11 px-4 text-sm bg-brand-cream/30 border border-brand-tint rounded-xl text-brand-dark placeholder-brand-gray/60 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full h-11 bg-brand-teal hover:bg-brand-teal-hover text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-75 shadow-sm"
            >
              {status === "submitting" ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending request...
                </>
              ) : (
                "Request a callback"
              )}
            </button>
          </form>

          <p className="text-[10px] text-center text-brand-gray leading-normal">
            No spam. A real clinic advisor calls you back, fast.
          </p>
        </>
      )}
    </div>
  );
}
