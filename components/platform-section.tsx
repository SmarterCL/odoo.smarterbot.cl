'use client'

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Keyboard, MousePointerClick, Receipt, History, ArrowRight } from "lucide-react"

const signals = [
    {
        icon: Keyboard,
        title: "Escritura",
        description: "Entrada de datos por teclado",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        icon: MousePointerClick,
        title: "Navegación",
        description: "Clics y comportamiento de uso",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
    },
    {
        icon: MessageCircle,
        title: "WhatsApp",
        description: "Recepción de mensajes y audios",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
    },
    {
        icon: Receipt,
        title: "Transacciones",
        description: "Ventas, facturas y pagos",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
    },
    {
        icon: History,
        title: "Patrones",
        description: "Repetición o abandono de acciones",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
    },
]

export function PlatformSection() {
    return (
        <section className="py-20 lg:py-32 bg-background border-t border-border/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-xl md:text-2xl font-semibold text-foreground">
                        Una sola plataforma. Múltiples operaciones. Cero fricción.
                    </p>
                </div>

                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Cómo funciona SmarterOS
                    </h2>
                    <p className="text-xl font-semibold text-primary mb-6">
                        Eventos reales. Decisiones automáticas.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        SmarterOS no funciona a base de conversaciones largas ni asistentes que "hablan".
                        Opera a partir de eventos reales de uso, como los sistemas modernos de Google.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
                    {signals.map((signal) => (
                        <Card
                            key={signal.title}
                            className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 text-center"
                        >
                            <CardHeader className="flex flex-col items-center gap-4 pb-2 pt-6">
                                <div className={`w-12 h-12 rounded-lg ${signal.bgColor} flex items-center justify-center transition-colors group-hover:scale-110 duration-300`}>
                                    <signal.icon className={`w-6 h-6 ${signal.color}`} />
                                </div>
                                <CardTitle className="text-sm font-semibold">{signal.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="pb-6">
                                <p className="text-xs text-muted-foreground">{signal.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center max-w-2xl mx-auto bg-muted/30 rounded-2xl p-8 border border-border/50">
                    <p className="text-lg text-foreground font-medium mb-2">
                        Las señales construyen contexto.
                    </p>
                    <p className="text-lg text-foreground font-medium mb-6">
                        El contexto activa automatización e IA.
                    </p>
                    <p className="text-muted-foreground mb-8 italic">
                        Menos explicación. Más acción.
                    </p>
                    <Link href="/tecnologia">
                        <Button variant="outline" className="group">
                            Ver cómo funciona
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
