import preactRenderer from '@astrojs/preact/server.js';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Index from './index.astro';

expect.addSnapshotSerializer({
	test: (val) => typeof val === 'string',
	print: (val) => {
		return (
			(val as string)
				// Remove `data-astro-source-file` attributes to ensure consistent snapshots across different environments.
				// see: https://github.com/pHo9UBenaA/astro-react-tailwind-shadcn-starter/actions/runs/13352440761/job/37290691107?pr=10
				.replace(/\s+data-astro-source-file="[^"]*"/g, '')
		);
	},
});

test('snapshot', async () => {
	const container = await AstroContainer.create();

	// see: https://github.com/withastro/astro/issues/11882#issuecomment-2320538563
	container.addServerRenderer({
		name: '@astro/preact',
		renderer: preactRenderer,
	});

	container.addClientRenderer({
		name: '@astrojs/preact',
		entrypoint: '@astrojs/preact/client.js',
	});

	const result = await container.renderToString(Index);

	expect(result).toMatchSnapshot();
});
