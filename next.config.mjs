import { createMDX } from 'fumadocs-mdx/next';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const withMDX = createMDX();
const dirname = path.dirname(fileURLToPath(import.meta.url));

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/fivem' : '';
const assetPrefix = isProd ? 'https://jhag01.github.io/fivem/' : '';

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
