import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Zap, MessageCircle, FileText, Database } from "lucide-react"
import Link from "next/link"

const workflows = [
  {
    icon: MessageCircle,
    title: "Agendamiento Inteligente",
    description: "Coordina reuniones automáticamente desde WhatsApp hacia tu calendario y CRM.",
    tags: ["WhatsApp", "Google Calendar", "Odoo"],
    price: "Gratis",
    popular: true,
  },
  {
    icon: FileText,
    title: "Conciliación Bancaria IA",
    description: "Procesa cartolas PDF/Excel y las concilia contra facturas abiertas en Odoo.",
    tags: ["Contabilidad", "IA", "Bancos"],
    price: "Pro",
    popular: false,
  },
  {
    icon: Zap,
    title: "Lead Scoring & Routing",
    description: "Califica leads entrantes con IA y los asigna al vendedor correcto según reglas.",
    tags: ["CRM", "n8n", "Ventas"],
    price: "Pro",
    popular: true,
  },
  {
    icon: Database,
    title: "Sincronizador eCommerce",
    description: "Mantén stock y precios actualizados en Shopify/WooCommerce en tiempo real.",
    tags: ["Inventario", "Shopify", "WooCommerce"],
    price: "Gratis",
    popular: false,
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Marketplace
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            SmarterBot Store
          </h2>
          <p className="text-xl text-primary font-medium mb-6">
            Powered by n8n
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Catálogo de automatizaciones listas para usar.
            Instálalas directamente en tu entorno SmarterOS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {workflows.map((wf) => (
            <Card
              key={wf.title}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 flex flex-col"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <wf.icon className="w-5 h-5 text-primary" />
                  </div>
                  {wf.popular && (
                    <Badge variant="outline" className="text-xs bg-amber-500/10 text-amber-600 border-amber-200">
                      Popular
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg mb-2">{wf.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {wf.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {wf.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0 flex items-center justify-between border-t border-border/50 p-6 bg-muted/5 mt-auto">
                <span className="font-semibold text-sm">{wf.price}</span>
                <Link href="https://app.smarterbot.cl/dashboard" target="_blank">
                  <Button size="sm" variant="outline" className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors group/btn">
                    <Download className="w-4 h-4" />
                    Instalar
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center rounded-2xl bg-muted/30 p-8 border border-border/50 max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold mb-2">¿No encuentras lo que buscas?</h3>
          <p className="text-muted-foreground mb-6">
            Nuestros ingenieros de automatización crean flujos a medida para tu operación.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="https://smarterbot.store" target="_blank">
              <Button variant="outline">Ir a la Store completa</Button>
            </Link>
            <Link href="/#contacto">
              <Button>Solicitar desarrollo</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
