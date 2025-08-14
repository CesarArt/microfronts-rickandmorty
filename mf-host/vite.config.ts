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
      name: 'mf_host',
      remotes: {
        mf_characters: 'http://localhost:3002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom']
    })
  ],
})
