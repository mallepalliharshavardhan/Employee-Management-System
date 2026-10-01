import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
<<<<<<< HEAD
import tailwindcss from '@tailwindcss/vite'
=======
>>>>>>> 28b951f781058a5e9903a97739142599b1e4c065
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
<<<<<<< HEAD
    babel({ presets: [reactCompilerPreset()] }), tailwindcss()
  ]
=======
    babel({ presets: [reactCompilerPreset()] })
  ],
>>>>>>> 28b951f781058a5e9903a97739142599b1e4c065
})
