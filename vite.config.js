import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({server:{
  watch:{
    usePolling:true,
  }
},
  define: {
    'process.env': process.env
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@tailwindConfig': path.resolve(__dirname, 'tailwind.config.js'),
    },
  },
  optimizeDeps: {
    include: [
      '@tailwindConfig',
    ]
  }, 
  build: {
    outDir: 'dist', // esta é a pasta padrão, então normalmente já está correta
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  } 
})
