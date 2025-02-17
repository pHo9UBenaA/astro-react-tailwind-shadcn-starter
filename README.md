# Astro + React + Tailwind CSS + shadcn/ui Starter

A minimal starter template for building websites with Astro, React, Tailwind CSS, shadcn/ui components,
and Biome for linting and formatting.

## Getting Started

1. Clone the repository:
   ```bash
   git clone git@github.com:pHo9UBenaA/astro-react-tailwind-shadcn-starter.git
   cd astro-react-tailwind-shadcn-starter
   ```

2. Install dependencies:
   ```bash
   pnpm i --frozen-lockfile
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   ```

## Adding shadcn/ui components

Use the following command to add a component:
```bash
pnpm run shadcn:add <component-name>
```

**Note**: We are currently using `shadcn@2.1.8` for the `shadcn:add` command due to an issue reported in
[GitHub Issue #6483](https://github.com/shadcn-ui/ui/issues/6483).

## License

MIT License.
See [LICENSE](LICENSE) for details.
