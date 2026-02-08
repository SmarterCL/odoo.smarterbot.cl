import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export const metadata = {
    title: "Eliminación de Datos | SmarterOS",
    description: "Instrucciones detalladas para la eliminación de sus datos personales y cumplimiento con Facebook.",
}

export default function DatadeletePage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            <section className="pt-32 pb-20 bg-background relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="container mx-auto px-4 max-w-4xl">
                    <Badge variant="outline" className="mb-6 px-4 py-1 text-primary border-primary/30">
                        Soberanía de Datos
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                        Eliminación de Datos
                    </h1>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed text-lg text-pretty">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4 font-outfit">Compromiso con la Privacidad</h2>
                            <p>
                                En SmarterOS (SMARTER SPA), creemos que usted es el único dueño de su información. Si en algún momento decide dejar de utilizar nuestros servicios o desea que eliminemos sus datos personales de nuestros sistemas, ponemos a su disposición los mecanismos necesarios para hacerlo de forma rápida y transparente.
                            </p>
                        </section>

                        <section className="bg-muted/30 p-8 rounded-3xl border border-border/50 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold text-foreground mb-6 font-outfit flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">FB</span>
                                Instrucciones para Apps de Facebook
                            </h2>
                            <p className="mb-6">
                                De acuerdo con las políticas de Facebook Platform, si has utilizado tu cuenta de Facebook para interactuar con nuestras aplicaciones, puedes solicitar la eliminación de tus datos siguiendo estos pasos:
                            </p>
                            <ol className="space-y-4">
                                <li className="flex gap-4">
                                    <span className="flex-none w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">1</span>
                                    <span>Ingresa a tu perfil de Facebook y ve a <strong>Configuración y privacidad &gt; Configuración</strong>.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex-none w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">2</span>
                                    <span>En el menú lateral, selecciona <strong>Apps y sitios web</strong>.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex-none w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">3</span>
                                    <span>Busca <strong>SmarterOS</strong> y haz clic en el botón <strong>Eliminar</strong>.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex-none w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">4</span>
                                    <span>Confirma la eliminación para que Facebook nos notifique la solicitud de borrado de datos.</span>
                                </li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4 font-outfit">Solicitud Manual Directa</h2>
                            <p>
                                Para cualquier otro dato almacenado directamente en nuestra infraestructura (ERP Odoo, bases de datos locales, historial de WhatsApp), puede solicitar la eliminación total enviando un correo electrónico:
                            </p>
                            <div className="mt-6 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                <ul className="space-y-2">
                                    <li><strong>Email:</strong> <a href="mailto:hola@smarterbot.cl" className="text-primary font-semibold hover:underline">hola@smarterbot.cl</a></li>
                                    <li><strong>Asunto:</strong> Solicitud de Derecho al Olvido / Eliminación de Datos</li>
                                    <li><strong>Información requerida:</strong> Nombre completo y correo electrónico o número de teléfono registrado.</li>
                                </ul>
                            </div>
                            <p className="mt-6">
                                Una vez recibida la solicitud, nuestro equipo de soporte técnico procederá a la eliminación irreversible de sus registros en un plazo no mayor a <strong>48 horas hábiles</strong>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4 font-outfit">¿Qué sucede tras la eliminación?</h2>
                            <p>
                                Al confirmarse la eliminación:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Se borrarán permanentemente sus credenciales de acceso.</li>
                                <li>Se eliminarán todos los metadatos y logs de actividad asociados a su cuenta.</li>
                                <li>Se purgarán las copias de seguridad temporales en el siguiente ciclo de limpieza.</li>
                            </ul>
                            <p className="mt-4 text-sm text-muted-foreground italic">
                                Nota: Cierta información de carácter legal (facturación o contratos firmados) podrá ser retenida durante el tiempo mínimo exigido por la normativa tributaria chilena.
                            </p>
                        </section>

                        <footer className="pt-12 border-t border-border/50 flex flex-col gap-2 opacity-60">
                            <p>Smarter SPA - Padre Mariano 103 Of 201, Providencia, Santiago.</p>
                            <p>Última actualización: 8 de febrero de 2026.</p>
                        </footer>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
