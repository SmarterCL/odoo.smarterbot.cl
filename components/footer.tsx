"use client"

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-white font-semibold">SmarterOS</span>
            </div>
            <p className="text-slate-400 text-sm">Odoo ERP con IA e integraciones, sin la complejidad.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Producto</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Características
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Demo
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Documentación
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Soporte
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-slate-400 text-sm">© 2025 SmarterOS. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6 mt-6 sm:mt-0">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.338 16.338H13.67v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H8.08V9.97h2.559v1.5h.037c.357-.675 1.228-1.387 2.528-1.387 2.704 0 3.203 1.778 3.203 4.092v4.163zM5.005 8.997a1.56 1.56 0 11-.001-3.12 1.56 1.56 0 01.001 3.12zm1.338 7.341H3.667V9.97h2.676v6.368zM17.674 0H2.326C1.185 0 0 1.185 0 2.326v15.348C0 18.815 1.185 20 2.326 20h15.348C18.815 20 20 18.815 20 17.674V2.326C20 1.185 18.815 0 17.674 0z" />
              </svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.241 3.746 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
