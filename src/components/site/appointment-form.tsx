"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { site, conditions } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  name?: string;
  phone?: string;
  preferredDate?: string;
}

/**
 * Appointment request form.
 *
 * Posts to /api/appointments. That route currently validates and records the
 * request; it is wired to Supabase in the backend step. The form intentionally
 * collects the minimum needed to call the patient back — no medical history,
 * because this is not a secure clinical channel.
 */
export function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [message, setMessage] = useState("");

  function validate(data: FormData): FieldErrors {
    const next: FieldErrors = {};
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").replace(/\s+/g, "");

    if (name.length < 2) next.name = "Please enter your full name.";
    // Indian mobile numbers: 10 digits, optionally +91 prefixed.
    if (!/^(\+?91)?[6-9]\d{9}$/.test(phone)) {
      next.phone = "Enter a valid 10-digit mobile number so we can call you back.";
    }
    return next;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Move focus to the first invalid field (WCAG 3.3.1)
      const firstKey = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setMessage(
        "Thank you. Your request has been received — the clinic will call you to confirm your appointment time."
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "We could not submit your request just now. Please call the clinic directly and we will book you in."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="glass rounded-2xl p-8 text-center space-y-4"
      >
        <CheckCircle2 className="size-12 text-success mx-auto" aria-hidden />
        <h3 className="text-2xl">Request received</h3>
        <p className="text-muted-foreground max-w-md mx-auto">{message}</p>
        <Button
          variant="outline"
          size="cta"
          onClick={() => setStatus("idle")}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="glass rounded-2xl p-6 sm:p-8 space-y-5">
      <div className="space-y-1">
        <h3 className="text-2xl">Request an appointment</h3>
        <p className="text-sm text-muted-foreground">
          Fill this in and the clinic will call you back to confirm a time.
          Fields marked <span aria-hidden>*</span> are required.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Full name"
          name="name"
          required
          autoComplete="name"
          error={errors.name}
        />
        <Field
          label="Mobile number"
          name="phone"
          type="tel"
          inputMode="numeric"
          required
          autoComplete="tel"
          placeholder="10-digit mobile"
          error={errors.phone}
          helper="We use this only to confirm your appointment."
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="reason" className="block text-sm font-medium">
            What do you need help with?
          </label>
          <select
            id="reason"
            name="reason"
            defaultValue=""
            className="h-11 w-full rounded-xl border border-input bg-background px-3 text-base"
          >
            <option value="">Select a concern (optional)</option>
            {conditions.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Other">Something else</option>
          </select>
        </div>

        <Field
          label="Preferred date"
          name="preferredDate"
          type="date"
          helper={site.hours.weekday}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="notes" className="block text-sm font-medium">
          Anything else we should know?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="w-full rounded-xl border border-input bg-background p-3 text-base"
          placeholder="Optional — please do not share detailed medical history here."
        />
        <p className="text-xs text-muted-foreground">
          This form is not a secure medical channel and is not monitored around the
          clock. For anything urgent, please call.
        </p>
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="flex gap-3 rounded-xl border border-destructive/40 bg-destructive/5 p-4 text-sm"
        >
          <AlertCircle className="size-5 text-destructive shrink-0" aria-hidden />
          <div className="space-y-2">
            <p>{message}</p>
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold text-destructive underline tnum"
            >
              <Phone className="size-4" aria-hidden /> {site.contact.phoneDisplay}
            </a>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <Button
          type="submit"
          variant="accent"
          size="cta-lg"
          disabled={status === "submitting"}
        >
          {status === "submitting" && (
            <Loader2 className="animate-spin" aria-hidden />
          )}
          {status === "submitting" ? "Sending…" : "Request appointment"}
        </Button>
        <p className="text-sm text-muted-foreground">
          Prefer to talk?{" "}
          <a
            href={site.contact.phoneHref}
            className="font-semibold text-accent underline tnum"
          >
            {site.contact.phoneDisplay}
          </a>
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  helper,
  required,
  ...props
}: React.ComponentProps<"input"> & {
  label: string;
  name: string;
  error?: string;
  helper?: string;
}) {
  const helperId = helper ? `${name}-helper` : undefined;
  const errorId = error ? `${name}-error` : undefined;

  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
        {required && (
          <span className="text-emergency ml-0.5" aria-hidden>
            *
          </span>
        )}
      </label>
      <Input
        id={name}
        name={name}
        required={required}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={[errorId, helperId].filter(Boolean).join(" ") || undefined}
        className="h-11 text-base"
        {...props}
      />
      {helper && !error && (
        <p id={helperId} className="text-xs text-muted-foreground">
          {helper}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
