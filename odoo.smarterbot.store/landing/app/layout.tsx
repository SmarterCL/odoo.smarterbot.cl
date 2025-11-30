/// <reference path="../types/jsx.d.ts" />
import './globals.css'
import type { FC, ReactElement, ReactNode } from 'react'

export const metadata = {
  title: 'SmarterOS | Odoo + Automatización + IA',
  description: 'Landing SmarterOS: Implementación Odoo, integraciones, automatización n8n, WhatsApp, IA local.',
  keywords: ['Odoo','ERP','Chile','Automatización','IA','n8n','WhatsApp'],
  alternates: { canonical: 'https://odoo.smarterbot.store' },
  openGraph: {
    title: 'SmarterOS Chile',
    description: 'Odoo + IA + Automatización en tu propia infraestructura.',
    url: 'https://odoo.smarterbot.store',
    siteName: 'SmarterOS',
    locale: 'es_CL',
    type: 'website'
  },
  robots: { index: true, follow: true }
}

const RootLayout: FC<{ children: ReactNode }> = ({ children }): ReactElement => {
  return (
    <html lang="es">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  ) as ReactElement
}

export default RootLayout
