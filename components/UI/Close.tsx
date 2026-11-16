import { IconProps } from '@/data/icon.interface';

export default function Close({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M5.00745 5L10.9949 10.9875'
        strokeWidth='2'
        strokeLinecap='round'
        stroke='currentColor'
      />
      <path
        d='M5 10.9875L10.9875 5.00005'
        strokeWidth='2'
        strokeLinecap='round'
        stroke='currentColor'
      />
    </svg>
  );
}
