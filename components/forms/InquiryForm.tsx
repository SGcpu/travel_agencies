"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { destinations } from "@/lib/data/destinations";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Check, AlertCircle, Loader2 } from "lucide-react";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  destination: z.string().optional(),
  travelDates: z.string().optional(),
  travelers: z.string().min(1, "Please select number of travellers"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z
    .string()
    .min(20, "Please tell us a little more (at least 20 characters)"),
});

type FormData = z.infer<typeof schema>;

const inputCls = cn(
  "w-full bg-transparent border-b border-white/15 py-3 px-0",
  "font-body text-sm text-parchment placeholder:text-parchment/25",
  "transition-colors duration-200",
  "focus:outline-none focus:border-gold",
  "hover:border-white/30",
);

const selectCls = cn(inputCls, "appearance-none cursor-pointer");

export function InquiryForm({
  defaultDestination,
}: {
  defaultDestination?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      destination: defaultDestination ?? "",
      travelers: "",
      budget: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    // Simulate network request — replace with your email/CRM API call
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Inquiry submitted:", data);
    setSubmitting(false);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-16 gap-5">
        <div className="w-14 h-14 border border-gold flex items-center justify-center">
          <Check className="text-gold" size={22} />
        </div>
        <h3 className="font-display text-2xl text-parchment-100">
          Your Inquiry Has Arrived.
        </h3>
        <p className="font-body text-sm text-parchment/50 max-w-sm leading-relaxed">
          Your dedicated planner will reach out within 24 hours to begin the
          conversation. Great journeys start here.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="font-body text-xs tracking-widest uppercase text-gold/50 hover:text-gold transition-colors mt-4"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Journey inquiry form"
      className="space-y-10"
    >
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <FieldGroup label="First Name *" error={errors.firstName?.message}>
          <input
            {...register("firstName")}
            type="text"
            placeholder="Alexandra"
            autoComplete="given-name"
            className={inputCls}
            aria-required="true"
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
          />
        </FieldGroup>
        <FieldGroup label="Last Name *" error={errors.lastName?.message}>
          <input
            {...register("lastName")}
            type="text"
            placeholder="Harrington"
            autoComplete="family-name"
            className={inputCls}
            aria-required="true"
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
          />
        </FieldGroup>
      </div>

      {/* Contact row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <FieldGroup label="Email Address *" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className={inputCls}
            aria-required="true"
          />
        </FieldGroup>
        <FieldGroup label="Phone (optional)" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+1 212 555 0100"
            autoComplete="tel"
            className={inputCls}
          />
        </FieldGroup>
      </div>

      {/* Journey details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <FieldGroup
          label="Destination of Interest"
          error={errors.destination?.message}
        >
          <select {...register("destination")} className={selectCls}>
            <option value="">No preference — surprise me</option>
            {destinations.map((d) => (
              <option key={d.id} value={d.slug}>
                {d.name} — {d.country}
              </option>
            ))}
          </select>
        </FieldGroup>
        <FieldGroup label="Approximate Travel Dates">
          <input
            {...register("travelDates")}
            type="text"
            placeholder="June 2026 / Flexible"
            className={inputCls}
          />
        </FieldGroup>
      </div>

      {/* Budget + travellers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <FieldGroup
          label="Number of Travellers *"
          error={errors.travelers?.message}
        >
          <select
            {...register("travelers")}
            className={selectCls}
            aria-required="true"
          >
            <option value="">Select</option>
            {["1", "2", "3–4", "5–8", "9+"].map((v) => (
              <option key={v} value={v}>
                {v} traveller{v === "1" ? "" : "s"}
              </option>
            ))}
          </select>
        </FieldGroup>
        <FieldGroup label="Budget Per Person *" error={errors.budget?.message}>
          <select
            {...register("budget")}
            className={selectCls}
            aria-required="true"
          >
            <option value="">Select</option>
            {[
              "$10,000 – $15,000",
              "$15,000 – $25,000",
              "$25,000 – $50,000",
              "$50,000+",
              "Flexible / Unlimited",
            ].map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </FieldGroup>
      </div>

      {/* Message */}
      <FieldGroup
        label="Tell Us About Your Dream Journey *"
        error={errors.message?.message}
      >
        <textarea
          {...register("message")}
          rows={5}
          placeholder="What do you want to feel? What have you never seen? What do you need your journey to be?..."
          className={cn(inputCls, "resize-none")}
          aria-required="true"
        />
      </FieldGroup>

      {/* Submit */}
      <div className="flex items-center gap-4 pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={submitting}
          className={cn(
            "min-w-48 justify-center",
            submitting && "opacity-70 cursor-not-allowed",
          )}
        >
          {submitting ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              Sending…
            </>
          ) : (
            "Begin the Conversation"
          )}
        </Button>
        <p className="font-body text-[10px] text-parchment/25 leading-relaxed max-w-xs">
          No commitment or payment required. We will reply within 24 hours.
        </p>
      </div>
    </form>
  );
}

function FieldGroup({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div className="relative">
      <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-parchment/40 mb-3">
        {label}
      </label>
      {children}
      {error && (
        <p
          role="alert"
          className="mt-2 flex items-center gap-1.5 font-body text-xs text-sienna-light"
        >
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}
