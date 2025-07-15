import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const isFtpDeploy = true;
export default defineConfig({
  plugins: [react()],
  base: isFtpDeploy
    ? '/'
    : process.env.NODE_ENV === 'production'
    ? (process.env.VERCEL ? '/' : '/naturopathy-app/')
    : '/',
})
