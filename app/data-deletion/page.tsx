import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export const metadata = {
    title: "Eliminación de Datos | SmarterOS",
    description: "Instrucciones para solicitar la eliminación de datos personales (Facebook Data Deletion).",
}

export default function DataDeletionPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            <section className="pt-32 pb-20 bg-background relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="container mx-auto px-4 max-w-4xl">
                    <Badge variant="outline" className="mb-6 px-4 py-1 text-primary border-primary/30">
                        Legal & Facebook Compliance
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                        Instrucciones para la Eliminación de Datos
                    </h1>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed text-lg">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">Cumplimiento con Facebook</h2>
                            <p>
                                SmarterOS utiliza el inicio de sesión de Facebook y otras integraciones para mejorar su experiencia. De acuerdo con las políticas de Facebook para Platform de aplicaciones, estamos obligados a proporcionar una "URL de instrucciones de eliminación de datos" o una "URL de devolución de llamada para la eliminación de datos".
                            </p>
                            <p className="mt-4">
                                Si desea eliminar sus actividades relacionadas con la aplicación SmarterOS en Facebook, puede hacerlo siguiendo estos pasos:
                            </p>
                        </section>

                        <section className="bg-muted/50 p-6 rounded-2xl border border-border">
                            <h3 className="text-xl font-bold text-foreground mb-4">Pasos para eliminar sus datos vía Facebook:</h3>
                            <ol className="list-decimal pl-6 space-y-3">
                                <li>Vaya a la configuración y privacidad de su perfil de Facebook. Haga clic en <strong>Configuración</strong>.</li>
                                <li>Busque <strong>Apps y sitios web</strong> y verá todas las aplicaciones y sitios web que ha vinculado con Facebook.</li>
                                <li>Busque y haga clic en <strong>SmarterOS</strong> en la barra de búsqueda.</li>
                                <li>Desplácese y haga clic en <strong>Eliminar</strong>.</li>
                                <li>¡Listo! Ha eliminado con éxito sus actividades en la aplicación.</li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">Solicitud Manual de Eliminación</h2>
                            <p>
                                Si desea que eliminemos manualmente cualquier otro dato personal que SmarterOS pueda haber recopilado directamente (fuera de la plataforma de Facebook), puede enviarnos una solicitud formal:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li><strong>Correo electrónico:</strong> hola@smarterbot.cl</li>
                                <li><strong>Asunto:</strong> Solicitud de Eliminación de Datos Personales</li>
                                <li><strong>Cuerpo del mensaje:</strong> Incluya su nombre completo y el correo electrónico asociado a su cuenta.</li>
                            </ul>
                            <p className="mt-4">
                                Procesaremos su solicitud en un plazo máximo de 72 horas hábiles y le notificaremos una vez que los datos hayan sido eliminados de nuestros servidores.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">Qué datos se eliminan</h2>
                            <p>
                                Al solicitar la eliminación, borraremos permanentemente:
                            </p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Su perfil de usuario y credenciales (si aplica).</li>
                                <li>Historial de tokens de acceso de terceros.</li>
                                <li>Cualquier metadato de personalización almacenado en nuestras bases de datos.</li>
                            </ul>
                        </section>

                        <section className="pt-8 border-t border-border/50 text-sm italic">
                            <p>Última actualización: 8 de febrero de 2026.</p>
                            <p>Smarter SPA - Chile</p>
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
