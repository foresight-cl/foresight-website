"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Linkedin, MapPin, CheckCircle } from "lucide-react";
import { GradientButton } from "@/components/ui";
import { siteConfig, contactContent } from "@/data/content";
import { useLang } from "@/lib/i18n";

export default function ContactPage() {
  const { lang } = useLang();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      const res = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      // Fallback to mailto
      const subject = encodeURIComponent(
        lang === "es"
          ? `Contacto de ${formData.name}${formData.organization ? ` (${formData.organization})` : ""}`
          : `Contact from ${formData.name}${formData.organization ? ` (${formData.organization})` : ""}`
      );
      const body = encodeURIComponent(
        `${formData.message}\n\n---\n${lang === "es" ? "De" : "From"}: ${formData.name}\nEmail: ${formData.email}${formData.organization ? `\n${lang === "es" ? "Organización" : "Organization"}: ${formData.organization}` : ""}`
      );
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const c = contactContent[lang];

  const successMessage =
    lang === "es"
      ? "Tu mensaje fue enviado correctamente. Te responderemos lo antes posible."
      : "Your message was sent successfully. We'll get back to you as soon as possible.";

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-subtle hero-pattern py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
              {c.title}
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              {c.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 px-6 bg-slate-50 rounded-2xl">
                  <CheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
                  <h3 className="text-2xl font-bold text-navy mb-3">
                    {lang === "es" ? "¡Gracias!" : "Thank you!"}
                  </h3>
                  <p className="text-slate-500 mb-4">{successMessage}</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {lang === "es" ? "Enviar otro mensaje" : "Send another message"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div
                      role="alert"
                      className="rounded-xl border border-amber-300 bg-amber-50 px-5 py-4 text-amber-800"
                    >
                      {lang === "es"
                        ? "No pudimos enviar el formulario. Abrimos tu cliente de correo como alternativa; también puedes escribirnos directamente a "
                        : "We couldn't submit the form. We opened your email client as a fallback; you can also write to us directly at "}
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="font-medium underline"
                      >
                        {siteConfig.email}
                      </a>
                      .
                    </div>
                  )}
                  <div>
                    <label htmlFor="contact-name" className="sr-only">
                      {c.nameLabel}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder={c.nameLabel}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-lg"
                      required
                      minLength={2}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="sr-only">
                      {c.emailLabel}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder={c.emailLabel}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-lg"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-org" className="sr-only">
                      {c.organizationLabel}
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      placeholder={c.organizationLabel}
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          organization: e.target.value,
                        })
                      }
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="sr-only">
                      {c.messageLabel}
                    </label>
                    <textarea
                      id="contact-message"
                      placeholder={c.messageLabel}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={6}
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-lg resize-none"
                      required
                      minLength={10}
                    />
                  </div>
                  <GradientButton
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={sending}
                  >
                    {sending
                      ? (lang === "es" ? "Enviando..." : "Sending...")
                      : c.submit}
                    {!sending && <Send className="w-5 h-5 ml-2" />}
                  </GradientButton>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:pl-8"
            >
              <h2 className="text-2xl font-bold text-navy mb-8">
                {c.directContact}
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-navy group-hover:text-cyan transition-colors">
                      Email
                    </div>
                    <div className="text-slate-500">{siteConfig.email}</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={siteConfig.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-navy group-hover:text-cyan transition-colors">
                      LinkedIn
                    </div>
                    <div className="text-slate-500">@foresightcl</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-6 rounded-xl bg-slate-50">
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-navy">
                      {c.locationLabel}
                    </div>
                    <div className="text-slate-500">{c.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
