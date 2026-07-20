import type { CSSProperties } from 'react';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { SiteHeader } from '@/components/site-header';
import { siteHeaderHeight } from '@/lib/shared';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <>
      <SiteHeader />
      <DocsLayout
        tree={source.getPageTree()}
        {...baseOptions()}
        containerProps={{
          // DocsLayout's own container hardcodes min-height: 100dvh on
          // itself, unaware of <SiteHeader> sitting above it — without this
          // override every page gets an extra 2.25rem of scrollable overflow.
          style: { '--fd-docs-height': `calc(100dvh - ${siteHeaderHeight})` } as CSSProperties,
        }}
      >
        {children}
      </DocsLayout>
    </>
  );
}
