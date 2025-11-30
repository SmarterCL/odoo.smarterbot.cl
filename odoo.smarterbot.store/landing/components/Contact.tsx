export function Contact() {
  return (
    <section id="contacto" className="py-12 md:py-20">
      <div className="container grid md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <h2 className="section-title">Hablemos</h2>
          <p className="section-muted mb-4 md:mb-6">Cuéntanos contexto actual y qué te urge mejorar: priorizamos un piloto útil antes de una implantación grande.</p>
          <div className="space-y-3 md:space-y-4 text-xs md:text-sm">
            <p><strong>Email:</strong> contacto@smarteros.cl</p>
            <p><strong>WhatsApp:</strong> +56 9 7954 0471</p>
            <p><strong>Horario:</strong> Lun–Vie 09:00-18:00 CL</p>
          </div>
        </div>
        <form className="space-y-4 max-w-md">
          <input required name="nombre" placeholder="Nombre" className="w-full rounded-md border border-[color:var(--border)] px-3 py-2 text-sm" />
          <input required type="email" name="email" placeholder="Email" className="w-full rounded-md border border-[color:var(--border)] px-3 py-2 text-sm" />
            <input name="empresa" placeholder="Empresa" className="w-full rounded-md border border-[color:var(--border)] px-3 py-2 text-sm" />
          <textarea required name="mensaje" placeholder="Mensaje" rows={5} className="w-full rounded-md border border-[color:var(--border)] px-3 py-2 text-sm" />
          <button type="submit" className="btn-primary w-full">Enviar</button>
        </form>
      </div>
    </section>
  );
}
