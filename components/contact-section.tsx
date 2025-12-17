"use client"

import type React from "react"

import { useState } from "react"
import { openWhatsAppDemo } from "@/lib/whatsapp-demo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Clock, MapPin, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+56 9 7954 0471",
    href: "tel:+56979540471",
  },
  {
    icon: Mail,
    label: "Email",
    value: "smarterbotcl@gmail.com",
    href: "mailto:smarterbotcl@gmail.com",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lunes a viernes · 9:00 – 18:00",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Padre Mariano 103, Providencia",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    source: "odoo-landing",
  })
  const [sending, setSending] = useState(false)
  const [feedback, setFeedback] = useState<"idle" | "ok" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setFeedback("idle")
    setErrorMessage(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) {
        let detail = "No se pudo enviar"
        try {
          const payload = await res.json()
          detail = payload?.error || detail
        } catch {
          detail = `${detail} (status ${res.status})`
        }
        throw new Error(detail)
      }
      setFeedback("ok")
      setFormData({ name: "", email: "", phone: "", message: "", source: "odoo-landing" })
    } catch (err) {
      console.error(err)
      setErrorMessage(err instanceof Error ? err.message : "No se pudo enviar")
      setFeedback("error")
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header - Full Width */}
        <div className="mb-12 lg:mb-16">
          <p className="text-sm font-medium text-primary mb-4">Contacto</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Hablemos de tu proyecto
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            SmarterOS Chile – Plataforma de automatización y ERP basada en Odoo, n8n, Chatwoot, Supabase y Ollama.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info & Map */}
          <div className="space-y-8 h-full flex flex-col">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <Card key={info.label} className="border-border/50">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">{info.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map */}
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.626777644265!2d-70.61864969999999!3d-33.4330991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf6408756317%3A0xc486221c9751703f!2sPadre%20Mariano%20103%2C%207500027%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1sen!2scl!4v1707579178492!5m2!1sen!2scl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
              <p className="text-sm text-foreground">
                <strong className="text-primary">Stack completo:</strong>
                <br />
                Odoo Enterprise + n8n + WhatsApp Cloud API + Chatwoot + Ollama (IA local) + Supabase + VPS gestionado
              </p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <Card className="border-border/50 h-full">
            <CardContent className="p-6 h-full">
              <form onSubmit={handleSubmit} className="flex flex-col h-full gap-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Teléfono (opcional)
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+56 9 1234 5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

                <div className="space-y-2 flex-1 flex flex-col">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="flex-1 min-h-[120px] resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-auto"
                  disabled={sending}
                >
                  {sending ? "Enviando..." : "Enviar mensaje"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
                {feedback === "ok" && (
                  <p className="text-sm text-green-600">Mensaje enviado. Te contactaremos pronto.</p>
                )}
                {feedback === "error" && (
                  <p className="text-sm text-red-600">
                    {errorMessage || "No se pudo enviar. Intenta nuevamente en unos minutos."}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
