"use client"

import { Settings, Eye, Headphones, Code } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Settings,
      title: "Implementación Odoo Enterprise",
      description:
        "Diseñamos el proyecto según tus procesos: ventas, compras, inventario, contabilidad, servicio técnico y más. Incluye análisis, parametrización y salida en producción.",
      link: "Iniciar proyecto",
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/20",
    },
    {
      icon: Eye,
      title: "Integraciones listas para usar",
      description:
        "Conectamos Odoo con WhatsApp Business (Cloud API), portales web, ecommerce y APIs externas. Sin integraciones a medida ni sorpresas a los 2 meses.",
      link: "Ver integraciones",
      color: "from-pink-500/20 to-pink-600/20",
      borderColor: "border-pink-500/20",
    },
    {
      icon: Headphones,
      title: "Servicios profesionales Odoo",
      description:
        "Soporte técnico, migración de versiones, formación de usuarios y hosting gestionado. Un equipo que entiende negocio, no solo código.",
      link: "Solicitar soporte",
      color: "from-cyan-500/20 to-cyan-600/20",
      borderColor: "border-cyan-500/20",
    },
    {
      icon: Code,
      title: "Desarrollo a medida sobre Odoo",
      description:
        "Cuando tu proceso no cabe en un módulo estándar, lo personalizamos. Documentados y mantenibles, sin deuda técnica.",
      link: "Personalizar Odoo",
      color: "from-emerald-500/20 to-emerald-600/20",
      borderColor: "border-emerald-500/20",
    },
  ]

  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-purple-400 mb-4">Nuestros servicios</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Especialistas Odoo en Chile, con enfoque en automatización e IA
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            No solo te dejamos Odoo andando: lo conectamos con tu operación real
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group p-8 rounded-lg border ${service.borderColor} bg-gradient-to-br ${service.color} backdrop-blur hover:border-white/20 transition-all hover:shadow-lg hover:shadow-purple-500/10`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
                    <Icon className="w-6 h-6 text-slate-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group/link"
                    >
                      {service.link}
                      <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
