import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'AlumnitosApp',
        short_name: 'AlumnApp',
        description: 'Aplicacion con CRUD alumnos usando REDUX',
        theme_color: '#ff893b',
        background_color: '#ffffff',
        display: 'standalone', // se abre como app, sin la barra del navegador
        start_url: '/',
        icons: [
          {
            src: 'internet-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'internet-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'internet-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable', // version que se adapta a iconos redondos/cuadrados en Android
          },
        ],
      },
      workbox: {
        // Cachea automaticamente todo lo que Vite genera en el build (JS, CSS, HTML, imagenes)
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
  ],
})
