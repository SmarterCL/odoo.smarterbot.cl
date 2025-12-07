"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-slate-400">Odoo + IA + Automatización</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span>Odoo ERP en Chile,</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  sin integraciones dolorosas
                </span>
              </h1>
              <p className="text-lg text-slate-400 max-w-xl">
                Implementamos Odoo con conexiones listas a WhatsApp, IA local, n8n y tu negocio real. Pruébalo gratis.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span>WhatsApp integrado</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span>IA local con Ollama</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span>Automatización n8n</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium transition-all">
                Quiero ver una demo
              </button>
              <button className="px-6 py-3 rounded-full border border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 text-white font-medium transition-all">
                Agenda una llamada 20 min
              </button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="lg:pl-8">
            <div className="relative bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-8 space-y-6">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 rounded-xl" />

              <div className="relative space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">+70%</div>
                    <div className="text-xs text-slate-400 mt-1">Ahorro en integración</div>
                  </div>
                  <div className="text-center border-l border-r border-slate-700/50">
                    <div className="text-3xl font-bold text-pink-400">-50%</div>
                    <div className="text-xs text-slate-400 mt-1">Tiempo de setup</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">100%</div>
                    <div className="text-xs text-slate-400 mt-1">Sin SaaS cerrado</div>
                  </div>
                </div>

                {/* Real image instead of placeholder */}
                <div className="relative h-64 rounded-lg bg-gradient-to-br from-slate-700/20 to-slate-800/20 border border-slate-700/30 overflow-hidden">
                  <Image
                    src="/hero-odoo-erp.jpg"
                    alt="Visualización de integración Odoo ERP"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
