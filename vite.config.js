import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // المسار النسبي ده بيخلي الموقع يشتغل في النشر المجاني مهما كان اسم المشروع
  base: './',
})
