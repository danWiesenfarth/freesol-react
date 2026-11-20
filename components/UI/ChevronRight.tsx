import { IconProps } from '@/data/interfaces/icon.interface';

export default function ChevronRight({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M7 17.191V7.8831C7 7.49445 7.42399 7.25439 7.75725 7.45435L16.219 12.5314C16.5573 12.7344 16.5382 13.2309 16.1853 13.4073L7.72361 17.6382C7.39116 17.8044 7 17.5627 7 17.191Z'
        fill='currentColor'
        strokeWidth='2'
        stroke='currentColor'
      />
    </svg>
  );
}
