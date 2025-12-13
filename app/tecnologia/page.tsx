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
