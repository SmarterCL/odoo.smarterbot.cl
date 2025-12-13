"use client"

import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, MessageCircle, FileText, ShoppingCart, Database, Mic, Bot, Search, LayoutGrid, List } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const workflows = [
  {
    icon: MessageCircle,
    title: "Auto-respuesta WhatsApp",
    description: "Responde automáticamente a mensajes de WhatsApp con IA. Soporte 24/7.",
    category: "CRM",
    tags: ["n8n", "WhatsApp"],
    downloads: "1.2K",
    rating: 4.8,
    highlight: true,
  },
  {
    icon: FileText,
    title: "Lead Magnet a Google Sheets",
    description: "Captura leads y guardalos en Google Sheets. Sincronización en tiempo real.",
    category: "Marketing",
    tags: ["Google Sheets", "Lead"],
    downloads: "2.1K",
    rating: 4.9,
    highlight: true,
  },
  {
    icon: Bot,
    title: "Telegram Bot con IA",
    description: "Bot de Telegram potenciado con OpenAI para responder preguntas de usuarios.",
    category: "Automatización",
    tags: ["Telegram", "OpenAI"],
    downloads: "1.7K",
    rating: 4.7,
    highlight: true,
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce a Slack",
    description: "Notifica a tu equipo en Slack cuando se realizan nuevas ventas en WooCommerce.",
    category: "E-commerce",
    tags: ["WooCommerce", "Slack"],
    downloads: "3.4K",
    rating: 4.5,
    highlight: true,
  },
  {
    icon: Database,
    title: "Email a Base de Datos",
    description: "Procesa emails automáticamente y guarda información en tu base de datos.",
    category: "Integraciones",
    tags: ["Email", "Database"],
    downloads: "1.5K",
    rating: 4.6,
    highlight: true,
  },
  {
    icon: Mic,
    title: "Podcast a Transcripción",
    description: "Convierte archivos de audio en texto con transcripción automática con IA.",
    category: "Social Media",
    tags: ["Audio", "Transcripción"],
    downloads: "892",
    rating: 4.8,
    highlight: true,
  },
]

const categories = ["Todos", "Automatización", "CRM", "Social Media", "E-commerce", "Integraciones", "Marketing"]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            SmarterBot <span className="text-primary">Store</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Powered by n8n. Marketplace de Workflows Profesionales.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar workflows..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-border/50 bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${i === 0 ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center px-2">
            <p className="text-muted-foreground text-sm font-medium">
              Mostrando <span className="text-foreground font-bold">{workflows.length}</span> workflows
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground"><LayoutGrid className="w-4 h-4" /></Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground/50"><List className="w-4 h-4" /></Button>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {workflows.map((wf) => (
            <Card
              key={wf.title}
              className="group hover:shadow-xl transition-all duration-300 border-border/40 hover:border-primary/20 bg-card/50 backdrop-blur-sm flex flex-col overflow-hidden"
            >
              <CardHeader className="pb-4 relative">
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-900">
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-500">★ {wf.rating}</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <wf.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <Badge variant="secondary" className="text-[10px] px-2 h-5 mb-2">{wf.category}</Badge>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">{wf.title}</CardTitle>
                </div>
                <CardDescription className="line-clamp-2 text-sm leading-relaxed mt-2">
                  {wf.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {wf.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-muted/50 px-2 py-1 rounded-md text-muted-foreground border border-border/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-4 flex items-center justify-between border-t border-border/30 bg-muted/5 mt-auto">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Download className="w-3.5 h-3.5" />
                  <span className="text-xs font-medium">{wf.downloads}</span>
                </div>
                <Link href="https://app.smarterbot.cl/dashboard" target="_blank">
                  <Button size="sm" className="h-8 text-xs font-medium gap-1.5 shadow-lg shadow-primary/10 hover:shadow-primary/20">
                    INSTALAR
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-background border border-primary/10 p-8 md:p-12 text-center max-w-4xl mx-auto">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-3">¿Necesitas algo específico?</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Explora nuestra colección completa con cientos de workflows o solicita un desarrollo a medida.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://smarterbot.store" target="_blank">
                <Button className="h-11 px-8 shadow-xl shadow-primary/10">Ir a la Store completa</Button>
              </Link>
              <Link href="/#contacto">
                <Button variant="outline" className="h-11 px-8 bg-background/50 backdrop-blur-sm">Solicitar desarrollo</Button>
              </Link>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}

