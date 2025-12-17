'use client'

import { useState } from "react"
import { Check, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const formatUF = (value: number, opts?: { min?: number; max?: number }) =>
    value.toLocaleString("es-CL", {
        minimumFractionDigits: opts?.min ?? 1,
        maximumFractionDigits: opts?.max ?? 2,
    })

const plans = [
    {
        name: "Startup",
        description: "Para emprendimientos",
        pricing: {
            monthly: 0.4,
            annual: {
                base: 4,
                total: 3.4,
                monthlyEquivalent: 0.283,
                discountLabel: "–15% anual",
            },
            biennial: {
                base: 8,
                total: 6,
                monthlyEquivalent: 0.25,
                discountLabel: "–25% 24 meses",
            },
        },
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
        pricing: {
            monthly: 0.7,
            annual: {
                base: 8.4,
                total: 6.7,
                monthlyEquivalent: 0.56,
                discountLabel: "–20% anual",
            },
            biennial: {
                base: 16.8,
                total: 11.8,
                monthlyEquivalent: 0.49,
                discountLabel: "–30% 24 meses",
            },
        },
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
        pricing: {
            monthly: 1.2,
            annual: {
                base: 14.4,
                total: 10.8,
                monthlyEquivalent: 0.9,
                discountLabel: "–25% anual",
            },
            biennial: {
                base: 28.8,
                total: 18.7,
                monthlyEquivalent: 0.78,
                discountLabel: "–35% 24 meses",
            },
        },
        features: [
            "Todo Pro",
            "ERP completo",
            "Integraciones API (MCP)",
            "Soporte prioritario",
            "Automatizaciones avanzadas",
        ],
        highlighted: false,
    },
]

export function PricingSection() {
    const [cycle, setCycle] = useState("24") // default to 24 months as per request mockup implication

    return (
        <section id="precios" className="py-20 bg-background/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Planes Smarter por industria</h2>
                    <p className="text-muted-foreground">
                        Valores netos en UF + IVA. Mono-tenant con facturación recurrente en Odoo ecommerce.
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
                        const { pricing } = plan
                        let currentPrice = pricing.monthly
                        let originalPrice = null
                        let discountLabel = ""
                        let priceUnit = "/mes"
                        let monthlyEquivalent = pricing.monthly

                        if (cycle === "12") {
                            currentPrice = pricing.annual.total
                            originalPrice = pricing.annual.base
                            discountLabel = pricing.annual.discountLabel
                            priceUnit = "/año"
                            monthlyEquivalent = pricing.annual.monthlyEquivalent
                        } else if (cycle === "24") {
                            currentPrice = pricing.biennial.total
                            originalPrice = pricing.biennial.base
                            discountLabel = pricing.biennial.discountLabel
                            priceUnit = "/ 2 años"
                            monthlyEquivalent = pricing.biennial.monthlyEquivalent
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
                                        {cycle !== "1" && (
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                                                    {discountLabel}
                                                </span>
                                                {originalPrice && (
                                                    <span className="text-sm text-muted-foreground line-through">
                                                        UF {formatUF(originalPrice, { min: 1, max: 2 })} {priceUnit}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                        <div className="flex items-end gap-1">
                                            <span className="text-4xl font-bold">
                                                UF{" "}
                                                {formatUF(currentPrice, {
                                                    min: currentPrice < 1 ? 3 : 1,
                                                    max: currentPrice < 1 ? 3 : 2,
                                                })}
                                            </span>
                                            <span className="text-muted-foreground mb-1">{priceUnit}</span>
                                        </div>
                                        {cycle !== "1" ? (
                                            <p className="text-xs text-muted-foreground">
                                                Equiv. UF{" "}
                                                {formatUF(monthlyEquivalent, { min: 3, max: 3 })} / mes
                                            </p>
                                        ) : (
                                            <p className="text-xs text-muted-foreground">
                                                Mono-tenant en UF neta + IVA
                                            </p>
                                        )}

                                        <ul className="space-y-3">
                                            {plan.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-2 text-sm">
                                                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                                    <span className="text-muted-foreground">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </CardContent>

                                <CardFooter className="flex flex-col gap-4 border-t pt-6 text-muted-foreground">
                                    <Button
                                        onClick={() => window.open(flowLink, '_blank')}
                                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                                    >
                                        Comenzar con {plan.name}
                                        <ExternalLink className="ml-2 w-4 h-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </div>

                <div className="max-w-3xl mx-auto mt-12 text-sm text-muted-foreground space-y-1">
                    <p className="font-semibold text-foreground">Aclaraciones</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Precios netos en UF + IVA; facturación recurrente en Odoo ecommerce.</li>
                        <li>Odoo personalizado no incluido; se vende por separado.</li>
                        <li>API es MCP (no Odoo); mono-tenant para margen controlado.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
