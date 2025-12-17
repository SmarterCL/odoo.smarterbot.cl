import Link from "next/link"
import { Button } from "@/components/ui/button"

const TRIAL_URL = "https://www.odoo.com/es/trial"

const footerLinks = {
  servicios: [
    { label: "Implementación Odoo", href: "#" },
    { label: "Integraciones", href: "#" },
    { label: "Desarrollo a medida", href: "#" },
    { label: "Soporte técnico", href: "#" },
    { label: "Hosting gestionado", href: "#" },
  ],
  tecnologias: [
    { label: "Odoo Enterprise", href: "#" },
    { label: "n8n Automatización", href: "#" },
    { label: "WhatsApp Cloud API", href: "#" },
    { label: "Chatwoot", href: "#" },
    { label: "Ollama IA", href: "#" },
  ],
  recursos: [
    { label: "Blog", href: "#" },
    { label: "Documentación", href: "#" },
    { label: "Casos de uso", href: "#" },
    { label: "FAQ", href: "/faq" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Legal */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">SmarterOS</span>
            </Link>
            <p className="text-background/70 max-w-sm leading-relaxed">
              Plataforma de automatización y ERP basada en Odoo, n8n, Chatwoot, Supabase y Ollama.
              Chile · proyectos remotos y presenciales.
            </p>

            <div className="text-xs text-background/50 space-y-1 pt-4 border-t border-background/10">
              <p className="font-semibold text-background/70">SMARTER SPA</p>
              <p>RUT: 78.233.417-4</p>
              <p>Servicios de consultoría de desarrollo de software</p>
              <p>Padre Mariano 103 Of 201, Providencia, Santiago</p>
            </div>

            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={TRIAL_URL} target="_blank" rel="noreferrer">Probar Odoo ahora</a>
            </Button>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tecnologías */}
          <div>
            <h4 className="font-semibold mb-4">Tecnologías</h4>
            <ul className="space-y-3">
              {footerLinks.tecnologias.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">© 2025 SmarterOS Chile. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-background/50 hover:text-background transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-sm text-background/50 hover:text-background transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
