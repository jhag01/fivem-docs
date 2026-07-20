import { createMDX } from 'fumadocs-mdx/next';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const withMDX = createMDX();
const dirname = path.dirname(fileURLToPath(import.meta.url));

// GitHub Pages always serves a project repo at /<repo-name>/ — this can't be
// pointed at an arbitrary subpath, so this must match the actual repo name.
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/fivem-docs' : '';
const assetPrefix = isProd ? 'https://jhag01.github.io/fivem-docs/' : '';

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix,
  turbopack: {
    root: dirname,
  },
};

export default withMDX(config);
