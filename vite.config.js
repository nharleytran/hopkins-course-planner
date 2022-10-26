import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/hw5-course-planner-starter/", // TODO Update this
  plugins: [react()]
})
