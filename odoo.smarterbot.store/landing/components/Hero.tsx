export function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-24 md:pb-20" id="inicio">
      <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">Odoo en Chile sin fricción: <span className="text-[color:var(--brand)]">ERP + IA + Automatización</span></h1>
          <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-xl">Implementación Odoo sólida con integraciones listas (WhatsApp, n8n, Chatwoot, IA local) y enfoque en procesos reales. Empezamos rápido, escalamos limpio.</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
            <a href="#contacto" className="btn-primary text-center">Quiero una demo</a>
            <a href="#servicios" className="btn-outline text-center">Ver servicios</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-xl bg-gradient-to-br from-[color:var(--brand)] to-[color:var(--brand-accent)] opacity-10 absolute inset-0" />
          <div className="relative bg-white border border-[color:var(--border)] rounded-xl p-6 shadow-sm space-y-4">
            <h3 className="font-semibold">Stack SmarterOS</h3>
            <ul className="text-sm space-y-2">
              <li>✔ Odoo Enterprise / Community</li>
              <li>✔ Automatización con n8n</li>
              <li>✔ Atención multicanal vía Chatwoot</li>
              <li>✔ IA local (Ollama / MCP)</li>
              <li>✔ WhatsApp Cloud API oficial</li>
              <li>✔ Scripts de deployment y documentación</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
