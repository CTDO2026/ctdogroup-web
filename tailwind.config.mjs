/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        corporativo: {
          fondoClaro: '#ffffff',
          fondoGris: '#f8fafc',
          textoOscuro: '#0f172a',
          textoMutado: '#475569',
        },
        brand: {
          ctdo: '#1e40af',          // Azul Principal
          colombiatodo: '#f97316',  // Naranja Comercialización
          stgreenly: '#10b981',     // Verde Ambiental
          seguros: '#0284c7',       // Celeste Seguros
          energia: '#eab308',       // Amarillo Grupos Electrógenos
          desarrollo: '#6366f1',    // Índigo Desarrollo/IT
        }
      },
    },
  },
  plugins: [],
}