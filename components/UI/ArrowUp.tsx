import { IconProps } from '@/data/icon.interface';

export default function ArrowUp({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6 17L10.5927 7.81468C10.7691 7.46179 11.2656 7.44272 11.4686 7.78104L17 17'
        strokeWidth='2'
        strokeLinecap='round'
        stroke='currentColor'
      />
    </svg>
  );
}
