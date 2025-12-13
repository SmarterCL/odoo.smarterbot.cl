import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, MessageCircle, FileText, ShoppingCart, Database, Mic, Bot } from "lucide-react"
import Link from "next/link"

const workflows = [
  {
    icon: MessageCircle,
    title: "Auto-respuesta WhatsApp",
    description: "Responde automáticamente a mensajes de WhatsApp con IA. Soporte 24/7.",
    tags: ["n8n", "WhatsApp"],
    downloads: "1,243 descargas",
    highlight: true,
  },
  {
    icon: FileText,
    title: "Lead Magnet a Google Sheets",
    description: "Captura leads y guardalos en Google Sheets. Sincronización en tiempo real.",
    tags: ["Google Sheets", "Lead"],
    downloads: "2,156 descargas",
    highlight: true,
  },
  {
    icon: Bot,
    title: "Telegram Bot con IA",
    description: "Bot de Telegram potenciado con OpenAI para responder preguntas de usuarios.",
    tags: ["Telegram", "OpenAI"],
    downloads: "1,789 descargas",
    highlight: true,
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce a Slack",
    description: "Notifica a tu equipo en Slack cuando se realizan nuevas ventas en WooCommerce.",
    tags: ["WooCommerce", "Slack"],
    downloads: "3,421 descargas",
    highlight: true,
  },
  {
    icon: Database,
    title: "Email a Base de Datos",
    description: "Procesa emails automáticamente y guarda información en tu base de datos.",
    tags: ["Email", "Database"],
    downloads: "1,567 descargas",
    highlight: true,
  },
  {
    icon: Mic,
    title: "Podcast a Transcripción",
    description: "Convierte archivos de audio en texto con transcripción automática con IA.",
    tags: ["Audio", "Transcripción"],
    downloads: "892 descargas",
    highlight: true,
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            SmarterBot Store
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Marketplace de Workflows Profesionales
          </h2>
          <p className="text-xl text-primary font-medium mb-6">
            Powered by n8n
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Descubre e instala automatizaciones potentes creadas por la comunidad n8n.
            Ahorra tiempo y escala tu negocio sin código.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                  <Badge variant="outline" className="text-xs bg-muted text-muted-foreground border-border">
                    +1
                  </Badge>
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
                <span className="text-xs text-muted-foreground font-medium">{wf.downloads}</span>
                <Link href="https://app.smarterbot.cl/dashboard" target="_blank">
                  <Button size="sm" variant="default" className="gap-2 transition-colors group/btn">
                    <Download className="w-4 h-4" />
                    INSTALAR
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center rounded-2xl bg-muted/30 p-8 border border-border/50 max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold mb-2">¿Quieres ver más?</h3>
          <p className="text-muted-foreground mb-6">
            Explora cientos de workflows categorizados en nuestra store completa.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="https://smarterbot.store" target="_blank">
              <Button variant="outline">Ir a la Store completa</Button>
            </Link>
            <Link href="https://n8n.io" target="_blank">
              <Button variant="ghost">Documentación n8n</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
