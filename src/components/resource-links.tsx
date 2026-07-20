import { Callout } from 'fumadocs-ui/components/callout';
import { gitConfig } from '@/lib/shared';

export function ResourceLinks({ repo }: { repo: string }) {
  const base = `https://github.com/${gitConfig.user}/${repo}`;

  return (
    <Callout type="info" title="Get the code">
      <a href={base} target="_blank" rel="noreferrer noopener" className="font-medium underline underline-offset-4">
        View on GitHub
      </a>
      {' · '}
      <a href={`${base}/releases/latest`} target="_blank" rel="noreferrer noopener" className="font-medium underline underline-offset-4">
        Latest Release
      </a>
    </Callout>
  );
}
