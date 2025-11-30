const services = [
  { title: 'Implementación Odoo', desc: 'Parametrización funcional, migración inicial y salida a producción con control de calidad.' },
  { title: 'Integraciones listas', desc: 'WhatsApp, Chatwoot, Web, eCommerce, APIs externas sin proyectos eternos.' },
  { title: 'Automatización n8n', desc: 'Flujos operativos repetitivos convertidos en tareas automatizadas auditables.' },
  { title: 'IA local / agentes', desc: 'Modelos corriendo en tu VPS y agentes orquestando procesos internos.' },
];

export function Services() {
  return (
    <section id="servicios" className="py-12 md:py-16 bg-[color:var(--muted)]">
      <div className="container">
        <h2 className="section-title">Servicios Odoo & Operación</h2>
        <p className="section-muted mb-8 md:mb-10">Nos enfocamos en que tu operación mejore rápido y se mantenga limpia: menos código frágil, más procesos medibles.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map(s => (
            <div key={s.title} className="rounded-lg border border-[color:var(--border)] bg-white p-4 md:p-5 flex flex-col gap-2 md:gap-3 hover:shadow transition-shadow">
              <h3 className="font-semibold text-[color:var(--brand)] text-sm md:text-base">{s.title}</h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
