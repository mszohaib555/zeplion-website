"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BUDGET_RANGES,
  PROJECT_TYPES,
  TIMELINES,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-[#00A3FF]/50 focus:ring-2 focus:ring-[#00A3FF]/20";

const labelClass = "mb-1.5 block text-sm font-medium text-foreground";

export function ContactForm() {
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const formData = {
      name: data.get("fullName") as string,
      email: data.get("email") as string,
      phone: data.get("whatsapp") as string,
      message: [
        `Project Type: ${data.get("projectType")}`,
        `Budget: ${data.get("budget")}`,
        `Timeline: ${data.get("timeline")}`,
        "",
        "Project Description:",
        data.get("description"),
      ].join("\n"),
    };

    try {
      const response = await fetch("https://formspree.io/f/xqevqoaw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmittedName(formData.name);
        form.reset();
      } else {
        setError(
          "Something went wrong. Please try again or WhatsApp us at +447479348006"
        );
      }
    } catch {
      setError(
        "Something went wrong. Please try again or WhatsApp us at +447479348006"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedName) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center"
      >
        <h3 className="text-xl font-semibold text-green-400">
          Thank you {submittedName}! We&apos;ll get back to you within 24
          hours.
        </h3>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm sm:p-8"
    >
      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
          {error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="John Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="whatsapp" className={labelClass}>
          WhatsApp Number
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          required
          placeholder="+44 7479 348006"
          className={inputClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className={labelClass}>
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            className={cn(inputClass, "cursor-pointer")}
          >
            <option value="">Select a type</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            required
            className={cn(inputClass, "cursor-pointer")}
          >
            <option value="">Select budget</option>
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="timeline" className={labelClass}>
          Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          required
          className={cn(inputClass, "cursor-pointer")}
        >
          <option value="">Select timeline</option>
          {TIMELINES.map((timeline) => (
            <option key={timeline} value={timeline}>
              {timeline}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="description" className={labelClass}>
          Project Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          placeholder="Tell us about your project, goals, and any specific requirements..."
          className={cn(inputClass, "resize-none")}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        data-track="cta-contact"
        className="w-full bg-[#00A3FF] text-white hover:bg-[#00A3FF]/90 sm:w-auto"
      >
        <Send className="mr-2 h-4 w-4" />
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </Button>
    </motion.form>
  );
}
