import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  define: {
    __DEFINES__: JSON.stringify({
      API_URL: "https://api.example.com",
      FEATURE_FLAG: true,
    }),
  },
})
