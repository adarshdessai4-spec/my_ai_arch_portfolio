"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardReveal } from "@/components/CardReveal";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().optional(),
  message: z.string().min(10, "Share a quick brief")
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful }
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log("Contact submission", data);
  };

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-neon-blue">Contact</p>
        <h1 className="text-3xl font-semibold text-white">Let's build AI</h1>
        <p className="mt-2 text-white/70">
          Share your goals and I'll respond within 24 hours.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <CardReveal>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="glass rounded-2xl p-6"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs text-white/50">Name</label>
              <input
                {...register("name")}
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-neon-orange">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-xs text-white/50">Email</label>
              <input
                {...register("email")}
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-neon-orange">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-4">
            <label className="text-xs text-white/50">Company</label>
            <input
              {...register("company")}
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
            />
          </div>
          <div className="mt-4">
            <label className="text-xs text-white/50">Message</label>
            <textarea
              {...register("message")}
              className="mt-1 h-32 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-neon-orange">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="mt-4 rounded-xl border border-neon-blue bg-neon-blue/10 px-4 py-2 text-sm font-semibold text-neon-blue"
          >
            Send message
          </button>
          {isSubmitSuccessful && (
            <p className="mt-3 text-sm text-neon-blue">
              Message queued. Adi will respond soon.
            </p>
          )}
          </form>
        </CardReveal>
        <div className="space-y-4">
          <CardReveal delay={0.05}>
            <div className="glass rounded-2xl p-5">
            <p className="text-sm font-semibold text-white">WhatsApp</p>
            <p className="mt-2 text-sm text-white/70">
              Fastest way to coordinate an AI build.
            </p>
            <button className="mt-3 rounded-full border border-white/20 px-4 py-2 text-xs text-white/70">
              Open WhatsApp (placeholder)
            </button>
            </div>
          </CardReveal>
          <CardReveal delay={0.1}>
            <div className="glass rounded-2xl p-5">
            <p className="text-sm font-semibold text-white">Calendly</p>
            <p className="mt-2 text-sm text-white/70">
              Reserve a slot for a strategy call.
            </p>
            <button className="mt-3 rounded-full border border-white/20 px-4 py-2 text-xs text-white/70">
              Book on Calendly (placeholder)
            </button>
            </div>
          </CardReveal>
          <CardReveal delay={0.15}>
            <div className="glass rounded-2xl p-5">
            <p className="text-sm font-semibold text-white">Response SLA</p>
            <p className="mt-2 text-sm text-white/70">
              Replies within 24 hrs. Priority for urgent builds.
            </p>
            </div>
          </CardReveal>
        </div>
      </div>
    </div>
  );
}
