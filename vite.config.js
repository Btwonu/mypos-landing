import { resolve } from 'path';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';

export default defineConfig({
	root: resolve(__dirname, 'src'),
	base: './',
	build: {
		outDir: resolve(__dirname, 'dist'),
		assetsInlineLimit: 0,
	},
	css: {
		postcss: {
			plugins: [autoprefixer({})],
		},
	},
});
