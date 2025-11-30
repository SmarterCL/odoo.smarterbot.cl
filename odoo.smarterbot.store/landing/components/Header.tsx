'use client'
import { useState } from 'react'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  
  return (
    <header className="w-full border-b border-[color:var(--border)] bg-white/70 backdrop-blur sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-[color:var(--brand)]">
          <span className="text-xl">SmarterOS</span>
        </a>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#servicios" className="hover:text-[color:var(--brand)] transition-colors">Servicios</a>
          <a href="#integraciones" className="hover:text-[color:var(--brand)] transition-colors">Integraciones</a>
          <a href="#automatizacion" className="hover:text-[color:var(--brand)] transition-colors">Automatización</a>
          <a href="#contacto" className="hover:text-[color:var(--brand)] transition-colors">Contacto</a>
        </nav>
        <div className="hidden md:flex gap-3">
          <a href="#contacto" className="btn-primary text-sm">Agenda Demo</a>
        </div>
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[color:var(--brand)]"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <nav className="md:hidden border-t border-[color:var(--border)] bg-white">
          <div className="container py-4 flex flex-col gap-3">
            <a href="#servicios" onClick={() => setMobileOpen(false)} className="py-2 hover:text-[color:var(--brand)] transition-colors">Servicios</a>
            <a href="#integraciones" onClick={() => setMobileOpen(false)} className="py-2 hover:text-[color:var(--brand)] transition-colors">Integraciones</a>
            <a href="#automatizacion" onClick={() => setMobileOpen(false)} className="py-2 hover:text-[color:var(--brand)] transition-colors">Automatización</a>
            <a href="#contacto" onClick={() => setMobileOpen(false)} className="py-2 hover:text-[color:var(--brand)] transition-colors">Contacto</a>
            <a href="#contacto" onClick={() => setMobileOpen(false)} className="btn-primary text-sm text-center mt-2">Agenda Demo</a>
          </div>
        </nav>
      )}
    </header>
  );
}
