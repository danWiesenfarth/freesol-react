import { IconProps } from '@/data/interfaces/icon.interface';

export default function ArrowDown({ size = 24, className }: IconProps) {
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
        d='M6 7L10.5927 16.1853C10.7691 16.5382 11.2656 16.5573 11.4686 16.219L17 7'
        strokeWidth='2'
        strokeLinecap='round'
        stroke='currentColor'
      />
    </svg>
  );
}
