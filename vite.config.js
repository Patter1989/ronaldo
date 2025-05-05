import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { imagetools } from "vite-imagetools";

// // https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// 	build: {
// 		sourcemap: true,
// 	},
// });


// import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react(), imagetools()],
	server: {
		proxy: {
			"/api": {
				target: "https://maps.googleapis.com",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
	assetsInclude: ["**/*.webp", "**/*.avif"],
});