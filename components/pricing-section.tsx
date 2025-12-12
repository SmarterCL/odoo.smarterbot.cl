'use client'

import { useState } from "react"
import { Check, Copy, Mail, MessageCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const plans = [
    {
        name: "Startup",
        description: "Para emprendimientos",
        basePrice: 29000,
        price12m: 26500, // Estimated 10% discount for 12 months
        price24m: 25000,
        commission12m: 35000, // Estimated commission for 12 months
        commission24m: 38000,
        discountLabel12m: "–10% descuento",
        discountLabel24m: "–15% descuento",
        features: [
            "CRM básico",
            "Chat omnicanal",
            "Automatizaciones básicas",
            "Gestión de contactos",
            "Reportes básicos",
        ],
        highlighted: false,
    },
    {
        name: "Pro",
        description: "Para operación completa",
        basePrice: 49000,
        price12m: 42500, // Estimated 12 month discount
        price24m: 39000,
        commission12m: 65000, // Estimated commission for 12 months
        commission24m: 75000,
        discountLabel12m: "–12% descuento",
        discountLabel24m: "–20% descuento",
        popular: true,
        features: [
            "WhatsApp Business + CRM",
            "Facturación electrónica",
            "Gestión de clientes",
            "Cobros por Flow",
            "Conciliación automática",
        ],
        highlighted: true,
    },
    {
        name: "Enterprise",
        description: "Para operación avanzada",
        basePrice: 99000,
        price12m: 84000, // Estimated 12 month discount
        price24m: 74000,
        commission12m: 110000, // Estimated commission for 12 months
        commission24m: 140000,
        discountLabel12m: "–17% descuento",
        discountLabel24m: "–25% descuento",
        features: [
            "Todo Plan Pro +",
            "ERP completo",
            "Integraciones API",
            "Soporte prioritario",
            "Automatizaciones avanzadas",
        ],
        highlighted: false,
    },
]

export function PricingSection() {
    const [cycle, setCycle] = useState("24") // default to 24 months as per request mockup implication

    return (
        <section className="py-20 bg-background/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Planes Smarter por industria</h2>
                    <p className="text-muted-foreground">
                        Valores en CLP + IVA. Cada plan incluye herramientas operativas reales integradas en SmarterOS.
                    </p>
                </div>

                <div className="flex justify-center mb-12">
                    <Tabs defaultValue="24" className="w-auto" onValueChange={setCycle}>
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="1">Mensual</TabsTrigger>
                            <TabsTrigger value="12">12 Meses</TabsTrigger>
                            <TabsTrigger value="24">24 Meses</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan) => {
                        // Determine pricing based on selected cycle
                        let currentPrice = plan.basePrice;
                        let originalPrice = null;
                        let discountLabel = "";
                        let commission = null;

                        if (cycle === "12") {
                            currentPrice = plan.price12m;
                            originalPrice = plan.basePrice;
                            discountLabel = plan.discountLabel12m;
                            commission = plan.commission12m;
                        } else if (cycle === "24") {
                            currentPrice = plan.price24m;
                            originalPrice = plan.basePrice;
                            discountLabel = plan.discountLabel24m;
                            commission = plan.commission24m;
                        }

                        // Generate the flow link with plan and cycle parameters
                        const flowLink = `https://flow.smarterbot.store/?plan=${plan.name.toLowerCase()}&cycle=${cycle}`

                        return (
                            <Card
                                key={plan.name}
                                className={`relative flex flex-col ${plan.highlighted ? 'border-primary shadow-lg scale-105 z-10' : 'border-border'}`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                                        <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                                            Más popular
                                        </span>
                                    </div>
                                )}

                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                                </CardHeader>

                                <CardContent className="flex-1 space-y-6">
                                    <div>
                                        {(cycle !== "1") && (
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                                                    {discountLabel}
                                                </span>
                                                {originalPrice && (
                                                    <span className="text-sm text-muted-foreground line-through">
                                                        ${originalPrice.toLocaleString('es-CL')}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                        <div className="flex items-end gap-1">
                                            <span className="text-4xl font-bold">
                                                ${currentPrice.toLocaleString('es-CL')}
                                            </span>
                                            <span className="text-muted-foreground mb-1">/mes</span>
                                        </div>

                                        {/* Display commission if not monthly plan */}
                                        {(cycle !== "1") && commission && (
                                            <p className="text-sm text-primary font-medium mt-2">
                                                Tu comisión: ${commission.toLocaleString('es-CL')}
                                            </p>
                                        )}
                                    </div>

                                    <ul className="space-y-3">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 text-sm">
                                                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>

                                <CardFooter className="flex flex-col gap-4 border-t pt-6 text-muted-foreground">
                                    <Button
                                        onClick={() => window.open(flowLink, '_blank')}
                                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                                    >
                                        Comenzar con {plan.name}
                                        <ExternalLink className="ml-2 w-4 h-4" />
                                    </Button>
                                    <div className="flex gap-4 w-full">
                                        <Button variant="ghost" size="icon" className="hover:text-[#25D366] hover:bg-[#25D366]/10 flex-1">
                                            <MessageCircle className="w-5 h-5" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10 flex-1">
                                            <Mail className="w-5 h-5" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10 flex-1">
                                            <Copy className="w-5 h-5" />
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
