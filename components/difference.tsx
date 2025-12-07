"use client"

export default function Difference() {
  return (
    <section id="difference" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-purple-400 mb-4">Nuestra diferencia</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            ¿Qué hacemos distinto a un partner Odoo tradicional?
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Traditional Partner */}
          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-red-500/30 bg-red-500/10">
              <h3 className="font-bold text-white mb-4">❌ Partner Odoo tradicional</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">−</span>
                  <span className="text-slate-300">Las integraciones toman 2-3 meses y cuestan extra</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">−</span>
                  <span className="text-slate-300">
                    WhatsApp, email y portales requieren desarrollos personalizados
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">−</span>
                  <span className="text-slate-300">IA siempre "en el roadmap del futuro"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">−</span>
                  <span className="text-slate-300">Tu operación se adapta al software, no al revés</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">−</span>
                  <span className="text-slate-300">Cambiar de proveedor es casi imposible (vendor lock-in)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - SmarterOS */}
          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10">
              <h3 className="font-bold text-white mb-4">✓ SmarterOS</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">+</span>
                  <span className="text-slate-300">WhatsApp, IA y n8n vienen integrados desde el día 1</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">+</span>
                  <span className="text-slate-300">Prueba, configura y automatiza sin esperar 3 meses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">+</span>
                  <span className="text-slate-300">IA local con Ollama: privacidad y control total</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">+</span>
                  <span className="text-slate-300">
                    El software se adapta a tu negocio, con datos en tu infraestructura
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">+</span>
                  <span className="text-slate-300">Código abierto: siempre puedes cambiar de proveedor</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chat Preview */}
        <div className="mt-16 p-8 rounded-lg border border-slate-700/50 bg-slate-800/30 backdrop-blur">
          <p className="text-sm text-slate-400 mb-6">Ejemplo: WhatsApp integrado en Odoo</p>
          <div className="space-y-4 max-w-xl">
            <div className="flex justify-end">
              <div className="max-w-xs px-4 py-2 rounded-lg bg-purple-600 text-white text-sm">
                ¿Cuál es el estado de mi pedido #1234?
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-xs px-4 py-2 rounded-lg bg-slate-700 text-slate-200 text-sm">
                Tu pedido #1234 está en preparación. Saldrá mañana por la mañana.
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-xs px-4 py-2 rounded-lg bg-purple-600 text-white text-sm">
                Perfecto, ¿a qué hora?
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-xs px-4 py-2 rounded-lg bg-slate-700 text-slate-200 text-sm">
                Entre las 9 y 12. Te enviaré el tracking apenas despache. 📦
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-6">
            Todo desde Odoo. El cliente comunica vía WhatsApp, tú ves todo en tu sistema.
          </p>
        </div>
      </div>
    </section>
  )
}
