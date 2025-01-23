import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// 	build: {
// 		sourcemap: true,
// 	},
// });


// import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: "https://maps.googleapis.com",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
});