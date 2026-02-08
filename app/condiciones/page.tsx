import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export const metadata = {
    title: "Condiciones del Servicio | SmarterOS",
    description: "Términos legales y condiciones de uso de la plataforma SmarterOS.",
}

export default function ConditionsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground text-pretty">
            <Header />

            <section className="pt-32 pb-20 bg-background relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="container mx-auto px-4 max-w-4xl">
                    <Badge variant="outline" className="mb-6 px-4 py-1 text-primary border-primary/30">
                        Marco Legal
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                        Condiciones del Servicio
                    </h1>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-muted-foreground leading-relaxed text-lg">
                        <section className="bg-muted/30 p-8 rounded-3xl border border-border/50 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold text-foreground mb-4 font-outfit">1. Aceptación</h2>
                            <p>
                                Al acceder a SmarterOS (SMARTER SPA), usted acepta regirse por estos términos. Nuestra plataforma integra soluciones de código abierto de clase mundial como Odoo 16, n8n y Chatwoot, bajo un modelo de implementación personalizada y soberanía tecnológica.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground font-outfit">2. Propiedad y Licencias</h2>
                            <p>
                                SmarterOS opera bajo un modelo de software libre. Las licencias originales de los componentes (LGPL, AGPL, MIT) se respetan íntegramente. Usted es dueño de sus datos y de las configuraciones específicas realizadas en sus instancias privadas.
                            </p>
                        </section>

                        <section className="space-y-4 p-8 border border-border/40 rounded-3xl">
                            <h2 className="text-2xl font-bold text-foreground font-outfit">3. Responsabilidades</h2>
                            <p>
                                El usuario se compromete a:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Utilizar la plataforma cumpliendo con la normativa de protección de datos.</li>
                                <li>No realizar actividades que comprometan la integridad de los servidores gestionados.</li>
                                <li>Mantener actualizadas las credenciales de acceso a sus módulos de integración.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground font-outfit">4. Continuidad y Soporte</h2>
                            <p>
                                Garantizamos un soporte técnico de alta disponibilidad para planes empresariales. Debido a la naturaleza modular del stack (WhatsApp API, VPS externos), la continuidad total depende de la operatividad de estos proveedores de infraestructura.
                            </p>
                        </section>

                        <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                            <h2 className="text-2xl font-bold text-foreground mb-4 font-outfit">5. Pagos y Cancelación</h2>
                            <p>
                                Los servicios se facturan en <strong>UF + IVA</strong>. El incumplimiento en los pagos puede conllevar a la suspensión temporal de los servicios administrados. La cancelación del servicio no implica el borrado automático de datos, el cual debe solicitarse explícitamente vía <a href="/datadelete" className="text-primary hover:underline italic">Página de Eliminación</a>.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground font-outfit">6. Ley Aplicable</h2>
                            <p>
                                Cualquier conflicto legal se resolverá bajo la jurisdicción de los tribunales de Santiago de Chile, de acuerdo con la legislación vigente.
                            </p>
                        </section>

                        <footer className="pt-12 border-t border-border/50 flex flex-col gap-2 opacity-60 text-sm">
                            <p>© 2026 Smarter SPA - Santiago, Chile.</p>
                            <p>Última actualización: 8 de febrero de 2026.</p>
                        </footer>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
