import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export const metadata = {
    title: "Política de Privacidad | SmarterOS",
    description: "Tratamiento de datos personales y privacidad en SmarterOS.",
}

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-20 bg-background relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="container mx-auto px-4 max-w-4xl">
                    <Badge variant="outline" className="mb-6 px-4 py-1 text-primary border-primary/30">
                        Legal
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                        Política de Privacidad
                    </h1>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed text-lg">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introducción</h2>
                            <p>
                                En SmarterOS (SMARTER SPA), nos tomamos muy en serio la privacidad de sus datos. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos su información personal cuando utiliza nuestro sitio web, servicios de implementación de Odoo y nuestras integraciones de automatización.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. Información que Recopilamos</h2>
                            <p>
                                Recopilamos información que usted nos proporciona directamente a través de:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Formularios de contacto y registro.</li>
                                <li>Interacciones con nuestros bots de WhatsApp.</li>
                                <li>Configuración de servicios de ERP Odoo e instancias de automatización.</li>
                                <li>Comunicaciones directas vía email o teléfono.</li>
                            </ul>
                            <p className="mt-4">
                                La información puede incluir su nombre, dirección de correo electrónico, número de teléfono, nombre de la empresa y detalles sobre sus necesidades operativas.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso de la Información</h2>
                            <p>
                                Utilizamos su información para:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Proporcionar, mantener y mejorar nuestros servicios de ERP y automatización.</li>
                                <li>Procesar sus solicitudes y responder a sus consultas.</li>
                                <li>Configurar sus instancias de Odoo 16, n8n y otros componentes del stack SmarterOS.</li>
                                <li>Enviar comunicaciones técnicas y administrativas.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. Procesamiento Local e IA</h2>
                            <p>
                                Alineado con nuestra filosofía de stack soberano, SmarterOS prioriza el procesamiento local. Siempre que sea posible, utilizamos modelos de IA (Ollama) que se ejecutan directamente en su infraestructura gestionada, minimizando la exposición de sus datos a servicios SaaS de terceros.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">5. Compartición de Datos</h2>
                            <p>
                                No vendemos sus datos personales. Solo compartimos información con proveedores de confianza necesarios para la prestación del servicio (como proveedores de hosting VPS o la API de WhatsApp Cloud) bajo estrictos acuerdos de confidencialidad.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">6. Sus Derechos</h2>
                            <p>
                                De acuerdo con la legislación Chilena vigente (Ley 19.628), usted tiene derecho a acceder, rectificar o eliminar su información personal. Puede ejercer estos derechos enviando un correo a hola@smarterbot.cl.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">7. Actualizaciones</h2>
                            <p>
                                Nos reservamos el derecho de actualizar esta política periódicamente para reflejar cambios en nuestras prácticas o requerimientos legales.
                            </p>
                            <p className="mt-4 text-sm italic">
                                Última actualización: 8 de febrero de 2026.
                            </p>
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
