import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LineChart, Store, Layers, Factory, CreditCard, HeadphonesIcon, PackageCheck, Sparkles } from "lucide-react"

const modules = [
  {
    icon: Store,
    title: "Ventas + CRM",
    description: "Pipeline con etapas, cotizaciones electrónicas, firma y cierre con seguimiento multicanal.",
    tags: ["CRM", "Ventas", "E-commerce"],
  },
  {
    icon: PackageCheck,
    title: "Inventario + Compras",
    description: "Control de stock, ubicaciones y lotes. Reaprovisionamiento automático conectado a proveedores.",
    tags: ["Stock", "Lotes", "MRP"],
  },
  {
    icon: CreditCard,
    title: "Facturación electrónica",
    description: "Configurado para Chile: folios, RUT, libros y conciliación bancaria con bancos locales.",
    tags: ["SII", "Conciliación", "Pagos"],
  },
  {
    icon: Layers,
    title: "Proyectos + Servicios",
    description: "Hojas de horas, milestones y facturación por avance. Visibilidad total al cliente.",
    tags: ["PMO", "Timesheets", "Portal"],
  },
  {
    icon: Factory,
    title: "Producción",
    description: "Órdenes de fabricación, listas de materiales y trazabilidad completa en planta.",
    tags: ["BOM", "Calidad", "IoT"],
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte + Chatwoot",
    description: "Mesas de ayuda conectadas a WhatsApp y correo, con SLAs y automatización n8n.",
    tags: ["Tickets", "WhatsApp", "SLA"],
  },
  {
    icon: LineChart,
    title: "Reportes ejecutivos",
    description: "Cuadros de mando por área, alertas en tiempo real y exportables listos para directorio.",
    tags: ["KPIs", "BI", "Alertas"],
  },
  {
    icon: Sparkles,
    title: "IA + Automatización",
    description: "Agentes con contexto de negocio, flujos n8n y Ollama local para privacidad.",
    tags: ["IA Local", "n8n", "Ollama"],
  },
]

export function ModulesSection() {
  return (
    <section id="modulos" className="py-20 lg:py-32 bg-secondary scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <p className="text-sm font-medium text-primary mb-2">Módulos listos para tu operación</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Odoo configurado para Chile, con integraciones reales
            </h2>
          </div>
          <div className="flex gap-3">
            <Badge variant="outline" className="border-primary/40 text-primary bg-primary/10">
              Multi-empresa
            </Badge>
            <Badge variant="outline" className="border-primary/40 text-primary bg-primary/10">
              Multi-RUT
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {modules.map((module) => (
            <Card
              key={module.title}
              className="border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              <CardHeader className="flex-row items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <module.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  <CardDescription className="text-sm mt-1 text-muted-foreground">
                    {module.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {module.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs px-2 py-1">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between bg-primary/5 border border-primary/20 rounded-2xl p-6">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">¿No ves tu módulo?</p>
            <p className="text-foreground font-semibold">Hacemos extensión y localización a medida, con repositorio entregable.</p>
          </div>
          <div className="flex gap-3">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Ver demo de módulos
            </Button>
            <Button size="lg" variant="outline" className="border-primary/40 text-primary">
              Hablar con un consultor
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
