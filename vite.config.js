import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	root: resolve(__dirname, 'src'),
	base: './',
	build: {
		outDir: resolve(__dirname, 'dist'),
		assetsInlineLimit: 0,
	},
});
