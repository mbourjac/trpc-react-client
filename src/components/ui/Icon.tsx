import type { SVGAttributes } from 'react';
import { cn } from '../../lib/tailwind.utils';

export type IconProps = (Omit<
  SVGAttributes<SVGSVGElement>,
  | 'xmlns'
  | 'viewBox'
  | 'className'
  | 'fill'
  | 'strokeWidth'
  | 'stroke'
  | 'aria-hidden'
> & {
  kind: keyof typeof iconsMapping;
  className?: string;
}) &
  (
    | {
        'aria-hidden'?: SVGAttributes<SVGSVGElement>['aria-hidden'];
        screenReaderLabel?: never;
      }
    | {
        'aria-hidden'?: never;
        screenReaderLabel?: string;
      }
  );

const iconsMapping = {
  success: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  ),
  error: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    />
  ),
};

export const Icon = ({
  kind,
  className,
  screenReaderLabel,
  ...attributes
}: IconProps) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.5}
        stroke="currentColor"
        className={cn('size-5', className)}
        aria-hidden={
          screenReaderLabel ? !!screenReaderLabel : attributes['aria-hidden']
        }
        {...attributes}
      >
        {iconsMapping[kind]}
      </svg>
      {screenReaderLabel && (
        <span className="sr-only">{screenReaderLabel}</span>
      )}
    </>
  );
};
