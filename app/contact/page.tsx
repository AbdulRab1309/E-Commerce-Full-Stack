"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input, Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Frontend-only: log to console and reset. Real API route comes later.
    console.log("Contact form submission:", data);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    reset();
  };

  return (
    <div>
      <div className="border-b-2 border-border px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
          Get
          <br />
          In
          <br />
          Touch.
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Info */}
        <div className="lg:border-r-2 border-border px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-8">
          <div>
            <h2 className="text-xs font-black uppercase tracking-widest opacity-60 mb-3">
              Warehouse
            </h2>
            <p className="text-base font-black uppercase tracking-tighter">
              ECHO. Embedded
              <br />
              14 Indiranagar Boulevard
              <br />
              Bengaluru, KA 560038
              <br />
              India
            </p>
          </div>
          <div>
            <h2 className="text-xs font-black uppercase tracking-widest opacity-60 mb-3">
              Email
            </h2>
            <a
              href="mailto:hello@echo.store"
              className="text-base font-black uppercase tracking-tighter strike-hover"
            >
              hello@echo.store
            </a>
          </div>
          <div>
            <h2 className="text-xs font-black uppercase tracking-widest opacity-60 mb-3">
              Support Hours
            </h2>
            <p className="text-base font-black uppercase tracking-tighter">
              Mon–Fri
              <br />
              09:00 – 18:00 IST
            </p>
          </div>
          <div>
            <h2 className="text-xs font-black uppercase tracking-widest opacity-60 mb-3">
              Press
            </h2>
            <a
              href="mailto:press@echo.store"
              className="text-base font-black uppercase tracking-tighter strike-hover"
            >
              press@echo.store
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {submitted ? (
            <div className="border-2 border-border p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter leading-[0.9]">
                Got it.
              </h2>
              <p className="mt-3 text-sm opacity-80">
                We&apos;ll be in touch within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs font-bold uppercase tracking-widest strike-hover opacity-60"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                label="Name"
                {...register("name")}
                error={errors.name?.message}
              />
              <Input
                label="Email"
                type="email"
                {...register("email")}
                error={errors.email?.message}
              />
              <Input
                label="Subject"
                {...register("subject")}
                error={errors.subject?.message}
              />
              <Textarea
                label="Message"
                rows={6}
                {...register("message")}
                error={errors.message?.message}
              />
              <Button type="submit" size="block" disabled={isSubmitting}>
                {isSubmitting ? "Sending…" : "Send Message →"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
