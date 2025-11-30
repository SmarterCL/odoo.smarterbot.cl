const points = [
  'KPIs y eventos disparan flujos automáticos',
  'Menos tareas manuales repetidas',
  'Trazabilidad y logs para auditoría',
  'Aislamos lógica para facilitar migraciones',
];

export function Automation() {
  return (
    <section id="automatizacion" className="py-12 md:py-16 bg-[color:var(--muted)]">
      <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div>
          <h2 className="section-title">Automatización Operativa</h2>
          <p className="section-muted mb-6 md:mb-8">Diseñamos flujos con n8n que conectan ERP, canales y modelos IA. Cada paso documentado en tu infraestructura.</p>
          <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
            {points.map(p => <li key={p} className="flex gap-2"><span>✔</span><span>{p}</span></li>)}
          </ul>
        </div>
        <div className="rounded-xl border border-[color:var(--border)] bg-white p-6 shadow-sm">
          <h3 className="font-semibold mb-4">Ejemplo Flujo Base</h3>
          <ol className="list-decimal list-inside text-sm space-y-2 text-gray-700">
            <li>Lead entra por WhatsApp → Chatwoot</li>
            <li>n8n crea oportunidad en Odoo</li>
            <li>Lógica IA resume intención del cliente</li>
            <li>Se agenda tarea y se envía confirmación</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
