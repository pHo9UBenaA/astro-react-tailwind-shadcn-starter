import preactRenderer from '@astrojs/preact/server.js';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Index from './index.astro';

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
