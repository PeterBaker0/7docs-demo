import type { StreamMetaData } from '@7-docs/edge';
import type { FunctionComponent } from 'preact';

export const Sources: FunctionComponent<{ metadata?: null | StreamMetaData[] }> = props => {
  const sources = props.metadata;
  if (sources && sources.length > 0) {
    return (
      <div class="italic text-sm">
        Used sources:
        {sources.map((metadata, index) => {
          return (
            <>
              <a href={metadata.url} class={'inline mx-1 hover:underline'}>
                {metadata.title}
              </a>
              {index + 1 < sources.length ? ' ● ' : null}
            </>
          );
        })}
      </div>
    );
  }
  return null;
};
