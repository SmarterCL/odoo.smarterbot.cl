import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Keyboard,
    MousePointerClick,
    MessageCircle,
    CreditCard,
    FileText,
    Clock,
    Cpu,
    GitBranch,
    Zap,
    CheckCircle,
    BarChart3,
    ShieldCheck,
    Users,
    ArrowRight
} from "lucide-react"
import Link from "next/link"
import { YouTubeModal } from "@/components/youtube-modal"

export default function TechnologyPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-background relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <Badge variant="outline" className="mb-6 px-4 py-1 text-primary border-primary/30">
                        Tecnología Core
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-balance">
                        SmarterOS funciona por eventos, <br className="hidden md:block" />
                        <span className="text-primary">no por conversación</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        No necesitas hablar con el sistema.
                        <br />
                        El sistema observa, infiere y actúa.
                    </p>
                </div>
            </section>

            {/* Section 1: Entrada por eventos */}
            <section className="py-20 bg-muted/30 border-y border-border/50">
                <div className="container mx-auto px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">1. Entrada por teclado y acciones reales</h2>
                        <p className="text-muted-foreground text-lg">Todo queda registrado como evento operativo.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { icon: Keyboard, label: "Formularios", desc: "Entrada manual" },
                            { icon: MessageCircle, label: "WhatsApp", desc: "Mensajería" },
                            { icon: MousePointerClick, label: "Clicks", desc: "Navegación" },
                            { icon: CreditCard, label: "Pagos", desc: "Transacciones" },
                            { icon: FileText, label: "Facturación", desc: "Documentos" },
                            { icon: Clock, label: "Tiempos", desc: "Espera y SLAs" },
                        ].map((item) => (
                            <Card key={item.label} className="bg-background hover:border-primary/50 transition-colors">
                                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                                    <item.icon className="w-8 h-8 text-primary" />
                                    <div>
                                        <p className="font-semibold">{item.label}</p>
                                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: Motor de decisión */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-6">2. Motor de decisión</h2>
                            <p className="text-xl font-medium text-foreground mb-4">Reglas + Automatización + IA</p>
                            <p className="text-muted-foreground text-lg mb-8">
                                Nada experimental. Nada oculto. Decisiones en tiempo real basadas en datos concretos.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    { icon: CheckCircle, text: "Reglas claras y auditables" },
                                    { icon: GitBranch, text: "Flujos n8n entre sistemas" },
                                    { icon: Cpu, text: "IA local o conectada" },
                                    { icon: Zap, text: "Decisiones en tiempo real" },
                                ].map((item) => (
                                    <li key={item.text} className="flex items-center gap-3 text-foreground/80">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <item.icon className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="font-medium">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl opacity-30" />
                            <Card className="relative border-primary/20 bg-muted/20 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle>Lógica de Proceso</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 font-mono text-sm">
                                    <div className="p-3 bg-background rounded-lg border border-border/50">
                                        <span className="text-purple-500">if</span> (evento == <span className="text-green-500">'pago_recibido'</span>) {"{"}
                                        <br />&nbsp;&nbsp;<span className="text-blue-500">emitir_factura()</span>;
                                        <br />&nbsp;&nbsp;<span className="text-blue-500">notificar_whatsapp()</span>;
                                        <br />{"}"}
                                    </div>
                                    <div className="p-3 bg-background rounded-lg border border-border/50">
                                        <span className="text-purple-500">if</span> (cliente.inactivo &gt; 30_dias) {"{"}
                                        <br />&nbsp;&nbsp;<span className="text-blue-500">activar_secuencia_reactivacion()</span>;
                                        <br />{"}"}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Ejecución */}
            <section className="py-20 bg-muted/30 border-y border-border/50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-4">3. La IA no conversa, ejecuta</h2>
                        <p className="text-muted-foreground text-lg">
                            Transformamos intenciones en acciones concretas dentro de tu ERP.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            {
                                from: "Factura pendiente",
                                to: "Link de pago automático",
                                desc: "Sin intervención humana"
                            },
                            {
                                from: "Cliente inactivo",
                                to: "Seguimiento comercial",
                                desc: "Reactivación automática"
                            },
                            {
                                from: "Puntos por vencer",
                                to: "Aviso de beneficio",
                                desc: "Fidelización proactiva"
                            },
                            {
                                from: "Proceso repetido",
                                to: "Automatización sugerida",
                                desc: "Mejora continua"
                            }
                        ].map((item, idx) => (
                            <Card key={idx} className="hover:shadow-md transition-shadow">
                                <CardContent className="p-6 flex items-center justify-between gap-4">
                                    <div className="text-right flex-1">
                                        <span className="text-sm text-muted-foreground block mb-1">Causa</span>
                                        <span className="font-semibold">{item.from}</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <ArrowRight className="w-4 h-4 text-primary" />
                                    </div>
                                    <div className="text-left flex-1">
                                        <span className="text-sm text-muted-foreground block mb-1">Efecto</span>
                                        <span className="font-semibold text-primary">{item.to}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Escala */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">4. Por qué esto escala</h2>
                            <p className="text-lg text-muted-foreground">
                                SmarterOS se comporta como un sistema operativo de negocio, no como un chatbot.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { icon: Users, label: "Menos tareas manuales" },
                                { icon: Zap, label: "Menos fricción" },
                                { icon: ShieldCheck, label: "Menos dependencia humana" },
                                { icon: BarChart3, label: "Más consistencia" },
                            ].map((item) => (
                                <div key={item.label} className="text-center flex flex-col items-center gap-3">
                                    <div className="w-16 h-16 rounded-2xl bg-background border border-border/50 flex items-center justify-center shadow-sm">
                                        <item.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <span className="font-semibold text-foreground">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 bg-background text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Diseñado para operación real</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <YouTubeModal videoId="https://www.youtube.com/watch?v=-y4uG2rEXZY" title="Demo de SmarterOS">
                            <Button size="lg" className="text-lg h-12 px-8">
                                Quiero ver esto funcionando
                            </Button>
                        </YouTubeModal>
                        <Link href="/#contacto">
                            <Button variant="outline" size="lg" className="text-lg h-12 px-8">
                                Agendar demo Odoo 19
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
