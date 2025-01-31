# Astro + React + Tailwind CSS + shadcn/ui Starter

A minimal starter template for building websites with Astro, React, Tailwind CSS, shadcn/ui components, and Biome for linting and formatting.

## Features

- Astro for fast static site generation.
- React for component-based UI development.
- Tailwind CSS for utility-first styling.
- shadcn/ui for pre-built, customizable UI components.
- Biome for linting and formatting.
- TypeScript support included.

## Getting Started

1. Clone the repository:

2. Install dependencies:
   ```bash
   pnpm i
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   ```

## Customizing shadcn/ui Components

To add shadcn/ui components, use the `shadcn:add` command:
```bash
pnpm run shadcn:add <component-name>
```

**Note**: We are currently using `shadcn@2.1.8` for the `shadcn:add` command due to an issue reported in [GitHub Issue #6483](https://github.com/shadcn-ui/ui/issues/6483).

## License

MIT License. See [LICENSE](LICENSE) for details.
