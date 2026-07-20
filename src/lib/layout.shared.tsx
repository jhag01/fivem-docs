import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName } from './shared';

// GitHub link lives in <SiteHeader>, always visible regardless of sidebar
// state, so it's intentionally left out of the sidebar's own nav/footer here.
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: appName,
    },
  };
}
