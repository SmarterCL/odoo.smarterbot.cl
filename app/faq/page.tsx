import Link from "next/link"
import { ArrowRight, Book, Github, ShieldCheck } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

type DocSource = {
    title: string
    repo: string
    path: string
    branch?: string
    description: string
}

type DocResult = DocSource & {
    status: "ok" | "error"
    url: string
    excerpt?: string
    errorMessage?: string
}

export const dynamic = "force-dynamic"

const DOC_SOURCES: DocSource[] = [
    {
        title: "Documentación oficial (README)",
        repo: "odoo/documentation",
        path: "README.md",
        branch: "master",
        description: "Fuente principal con cómo navegar y contribuir a la documentación.",
    },
    {
        title: "Código Community (README)",
        repo: "odoo/odoo",
        path: "README.md",
        branch: "master",
        description: "Resumen del proyecto Odoo CE, cómo desplegar y contribuir.",
    },
    {
        title: "Licencia Odoo",
        repo: "odoo/odoo",
        path: "LICENSE",
        branch: "master",
        description: "Condiciones de uso y distribución que suelen salir en preguntas frecuentes.",
    },
]

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN

async function fetchDoc(source: DocSource): Promise<DocResult> {
    const branch = source.branch || "master"
    const url = `https://raw.githubusercontent.com/${source.repo}/${branch}/${source.path}`

    try {
        const res = await fetch(url, {
            cache: "no-store",
            headers: GITHUB_TOKEN
                ? {
                      Authorization: `Bearer ${GITHUB_TOKEN}`,
                      Accept: "application/vnd.github.raw",
                  }
                : {
                      Accept: "application/vnd.github.raw",
                  },
        })

        if (!res.ok) {
            return {
                ...source,
                status: "error",
                url,
                errorMessage: `GitHub respondió ${res.status}`,
            }
        }

        const content = await res.text()
        return {
            ...source,
            status: "ok",
            url,
            excerpt: buildExcerpt(content),
        }
    } catch (error) {
        return {
            ...source,
            status: "error",
            url,
            errorMessage: error instanceof Error ? error.message : "No se pudo leer el archivo",
        }
    }
}

function buildExcerpt(content: string): string {
    const normalized = content.replace(/\r\n/g, "\n")
    const paragraphs = normalized
        .split("\n\n")
        .map((block) => block.replace(/^#+\s*/gm, "").trim())
        .filter((block) => block.length > 0)

    const candidate = paragraphs.find((p) => p.length > 160) || paragraphs[0] || normalized
    return candidate.slice(0, 600)
}

export default async function FaqPage() {
    const results = await Promise.all(DOC_SOURCES.map(fetchDoc))

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="container mx-auto max-w-5xl text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        FAQ en vivo desde GitHub
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Preguntas frecuentes alimentadas directamente desde los documentos públicos de Odoo en GitHub.
                        Cada tarjeta lee el archivo real y muestra un extracto actualizado.
                    </p>
                </div>
            </section>

            <section className="flex-grow py-16 px-4">
                <div className="container mx-auto max-w-5xl space-y-12">
                    <div className="flex items-center gap-3">
                        <Github className="w-7 h-7 text-primary" />
                        <h2 className="text-2xl font-bold">Fuentes oficiales</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {results.map((doc) => (
                            <article
                                key={doc.url}
                                className="bg-card border border-border/60 rounded-xl p-6 hover:shadow-lg transition-all"
                            >
                                <div className="flex items-center justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <ShieldCheck className="w-4 h-4 text-primary" />
                                        <span>{doc.repo}</span>
                                    </div>
                                    <span
                                        className={`text-xs font-semibold px-2 py-1 rounded ${
                                            doc.status === "ok"
                                                ? "bg-emerald-100 text-emerald-700"
                                                : "bg-destructive/10 text-destructive"
                                        }`}
                                    >
                                        {doc.status === "ok" ? "Actualizado" : "Error"}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
                                <p className="text-muted-foreground mb-4">{doc.description}</p>

                                {doc.status === "ok" ? (
                                    <div className="bg-muted/60 border border-border/50 rounded-lg p-4 text-sm text-foreground">
                                        <p className="whitespace-pre-line leading-relaxed max-h-64 overflow-hidden">{doc.excerpt}</p>
                                    </div>
                                ) : (
                                    <div className="bg-destructive/10 border border-destructive/40 text-destructive rounded-lg p-4 text-sm">
                                        No se pudo leer el archivo. {doc.errorMessage || "Reintenta más tarde."}
                                    </div>
                                )}

                                <div className="mt-4 flex items-center justify-between">
                                    <Link
                                        href={doc.url}
                                        target="_blank"
                                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
                                    >
                                        Abrir en GitHub <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                    <span className="text-xs text-muted-foreground">Rama: {doc.branch || "master"}</span>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="bg-card border border-border/60 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <Book className="w-5 h-5 text-primary" />
                            <h3 className="text-xl font-semibold">¿Qué hace esta página?</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Usamos fetch directo a GitHub para leer los documentos de Odoo. Si necesitas más fuentes o
                            idiomas, añade su ruta en el repositorio y la página las leerá sin desplegar nuevo código.
                            Puedes configurar un token en <code className="px-1 py-0.5 bg-muted rounded text-sm">GITHUB_TOKEN</code> o{" "}
                            <code className="px-1 py-0.5 bg-muted rounded text-sm">GH_TOKEN</code> para evitar límites de rate.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
