import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Quote } from "lucide-react"

const TRIAL_URL = "https://www.odoo.com/es/trial"

const pilotFeatures = [
  "Alcance limitado pero funcional (ventas + facturación, por ejemplo)",
  "Datos de prueba o muestra de tus datos reales",
  "Automatización básica ya operativa",
  "Si no aporta valor, no continúas. Sin letra chica.",
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-primary mb-4">Prueba sin riesgo</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            ¿Quieres probar Odoo sin sufrir un proyecto eterno?
          </h2>
          <p className="text-muted-foreground mb-12">
            Ofrecemos un piloto guiado para que veas resultados reales antes de comprometerte.
          </p>

          <Card className="bg-card text-left">
            <CardContent className="p-8">
              <ul className="space-y-4 mb-8">
                {pilotFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href={TRIAL_URL} target="_blank" rel="noreferrer">
                    Probar Odoo ahora
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/#contacto">Envíame más información</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-10 bg-card/80 text-left">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <Quote className="w-4 h-4" />
                Caso real
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                “El tiempo que nos toma procesar nuestros documentos contables disminuyó de manera notable, en algunos casos pasó de 2 días a tan solo 5 horas. Gracias a esto, ahora podemos concentrarnos en lo que más importa: en informar y asesorar a nuestros clientes.”
              </p>
              <p className="text-sm text-muted-foreground">
                Harry Van Donink · Director general de KPMG Bélgica
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
