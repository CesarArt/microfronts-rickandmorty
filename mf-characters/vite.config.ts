import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'mf_characters',
      filename: 'remoteEntry.js',
      exposes: {
        './Characters': './src/Characters.tsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
})
