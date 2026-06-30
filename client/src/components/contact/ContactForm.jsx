"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import FloatingField from "./FloatingField";

export default function ContactForm() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setDone(true);
        setForm({
          full_name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setDone(false), 5000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
lg:col-span-3
relative
overflow-hidden
rounded-[32px]
border border-violet-500/20
bg-rich-black
text-white
p-6 sm:p-8 lg:p-10
h-full
flex
flex-col
"
      style={{
        boxShadow:
          "0 0 0 1px rgba(139,92,246,0.15), 0 0 40px rgba(139,92,246,0.15)",
      }}
    >
      {/* Purple Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-violet-500/20 blur-[140px]" />

      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Inner Border */}
      <div className="absolute inset-[1px] rounded-[31px] border border-white/5 pointer-events-none" />

      <div className="relative z-10">
        <p className="text-[10px] uppercase tracking-[0.4em] text-violet-400 mb-3">
          SEND A MESSAGE
        </p>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
          Tell us about
          <br />
          <span className="italic text-violet-400">your vision.</span>
        </h2>

        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16"
            >
              <div className="inline-flex w-20 h-20 rounded-full bg-violet-500/15 border border-violet-500/40 items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-violet-400" />
              </div>

              <h3 className="font-display text-3xl mb-3">Message Received</h3>

              <p className="text-white/60">
                Our team will contact you shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={onSubmit}
              className="space-y-5 flex flex-col h-full"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <FloatingField
                  label="Full Name"
                  required
                  value={form.full_name}
                  onChange={(v) =>
                    setForm({
                      ...form,
                      full_name: v,
                    })
                  }
                />

                <FloatingField
                  label="Email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(v) =>
                    setForm({
                      ...form,
                      email: v,
                    })
                  }
                />

                <FloatingField
                  label="Phone Number"
                  value={form.phone}
                  onChange={(v) =>
                    setForm({
                      ...form,
                      phone: v,
                    })
                  }
                />

                <FloatingField
                  label="Subject"
                  value={form.subject}
                  onChange={(v) =>
                    setForm({
                      ...form,
                      subject: v,
                    })
                  }
                />
              </div>

              <FloatingField
                label="Your Message"
                textarea
                required
                value={form.message}
                onChange={(v) =>
                  setForm({
                    ...form,
                    message: v,
                  })
                }
              />
              <div className="mt-15">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitting}
                  className="
                  w-full
                  py-5
                  rounded-2xl
                  bg-gradient-to-r
                  from-violet-500
                  via-purple-500
                  to-fuchsia-500
                  text-white
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.35em]
                  flex
                  items-center
                  justify-center
                  gap-3
                  hover:opacity-90
                  transition-all
                  mt-2
                "
                >
                  {submitting ? "SENDING..." : "SEND MESSAGE"}

                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
