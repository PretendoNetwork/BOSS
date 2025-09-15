import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/server.ts', 'src/cli/cli.ts'],
	splitting: false,
	sourcemap: true,
	platform: 'node',
	clean: true,
	format: ['cjs']
});
