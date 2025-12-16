import { NextResponse } from "next/server"

type ContactPayload = {
  name: string
  email: string
  phone?: string
  message: string
  source: string
}

const FASTAPI_CONTACT_URL = process.env.FASTAPI_CONTACT_URL
const FASTAPI_API_KEY = process.env.FASTAPI_API_KEY
const DEFAULT_SOURCE = process.env.CONTACT_SOURCE || "odoo-landing"

function asCleanString(value: unknown): string {
  return typeof value === "string" ? value.trim() : ""
}

function asOptionalString(value: unknown): string | undefined {
  const str = typeof value === "string" ? value.trim() : ""
  return str.length > 0 ? str : undefined
}

function isValidEmail(email: string) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    if (!FASTAPI_CONTACT_URL) {
      return NextResponse.json({ error: "Falta FASTAPI_CONTACT_URL" }, { status: 500 })
    }

    const body = await request.json().catch(() => null)
    const name = asCleanString(body?.name)
    const email = asCleanString(body?.email).toLowerCase()
    const message = asCleanString(body?.message)
    const phone = asOptionalString(body?.phone)
    const source = asOptionalString(body?.source) || DEFAULT_SOURCE

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 })
    }

    const payload: ContactPayload = {
      name,
      email,
      phone,
      message,
      source,
    }

    const headers: Record<string, string> = { "Content-Type": "application/json" }
    if (FASTAPI_API_KEY) {
      headers["X-API-Key"] = FASTAPI_API_KEY
    }

    const response = await fetch(FASTAPI_CONTACT_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      cache: "no-store",
    })

    const responseText = await response.text()
    let responseJson: unknown
    try {
      responseJson = JSON.parse(responseText)
    } catch {
      responseJson = { raw: responseText }
    }

    if (!response.ok) {
      return NextResponse.json(
        { error: "FastAPI rechazó la solicitud", details: responseJson },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error en /api/contact:", error)
    return NextResponse.json({ error: "Error interno" }, { status: 500 })
  }
}
