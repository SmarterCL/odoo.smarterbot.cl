import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export const metadata = {
    title: "Términos de Servicio | SmarterOS",
    description: "Condiciones legales y términos de servicio de SmarterOS.",
}

export default function TermsPage() {
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
                        Términos de Servicio
                    </h1>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed text-lg">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceptación de los Términos</h2>
                            <p>
                                Al acceder y utilizar los servicios de SmarterOS (SMARTER SPA), usted acepta estar sujeto a estos Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. Descripción del Servicio</h2>
                            <p>
                                SmarterOS proporciona una plataforma de automatización y ERP basada en software de código abierto (Odoo, n8n, etc.). Nuestros servicios incluyen implementación, configuración, hosting gestionado y soporte técnico.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. Responsabilidades del Usuario</h2>
                            <p>
                                Usted es responsable de:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Mantener la confidencialidad de sus credenciales de acceso.</li>
                                <li>Garantizar que el uso del ERP y las automatizaciones cumplan con las leyes chilenas.</li>
                                <li>Proporcionar información veraz para el registro y facturación.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. Propiedad Intelectual</h2>
                            <p>
                                SmarterOS utiliza componentes de software libre bajo licencias LGPL, AGPL y MIT. La propiedad intelectual de las configuraciones y desarrollos a medida realizados específicamente para usted le pertenece, siempre sujeto a los términos de las licencias base del software utilizado.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitación de Responsabilidad</h2>
                            <p>
                                Si bien nos esforzamos por garantizar la máxima disponibilidad (Uptime), SMARTER SPA no se hace responsable de pérdidas de datos resultantes de configuraciones erróneas del usuario o interrupciones en servicios de terceros necesarios para la operación (WhatsApp API o Proveedores de VPS).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">6. Pagos y Suscripciones</h2>
                            <p>
                                Los planes se facturan mensualmente en UF + IVA. La falta de pago puede resultar en la suspensión temporal de los servicios gestionados y el acceso a las instancias de automatización.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">7. Jurisdicción</h2>
                            <p>
                                Cualquier controversia derivada de estos términos será sometida a los tribunales ordinarios de justicia de la ciudad de Santiago de Chile.
                            </p>
                        </section>

                        <section>
                            <p className="mt-8 text-sm italic">
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
