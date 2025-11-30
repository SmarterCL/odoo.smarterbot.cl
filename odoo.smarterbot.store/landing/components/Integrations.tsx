const integrations = [
  { name: 'WhatsApp Cloud API', detail: 'Mensajería oficial integrada a CRM y helpdesk.' },
  { name: 'Chatwoot', detail: 'Centraliza soporte y canales en tiempo real.' },
  { name: 'n8n', detail: 'Orquestación de flujos y disparadores multi-sistema.' },
  { name: 'Ollama', detail: 'Modelos LLM locales con privacidad de datos.' },
  { name: 'Supabase', detail: 'Backends rápidos para extensiones y portales.' },
];

export function Integrations() {
  return (
    <section id="integraciones" className="py-12 md:py-16">
      <div className="container">
        <h2 className="section-title">Integraciones Estratégicas</h2>
        <p className="section-muted mb-8 md:mb-10">Conectamos Odoo a un stack moderno que reduce tiempos de respuesta y dependencia de SaaS propietarios.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {integrations.map(i => (
            <div key={i.name} className="rounded-lg border border-[color:var(--border)] p-4 md:p-5 bg-white flex flex-col gap-2">
              <h3 className="font-medium text-sm md:text-base">{i.name}</h3>
              <p className="text-xs md:text-sm text-gray-600">{i.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
