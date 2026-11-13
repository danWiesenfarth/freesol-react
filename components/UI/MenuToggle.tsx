'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface MenuToggleProps {
  isOpen: boolean;
}

export default function MenuToggle({ isOpen }: MenuToggleProps) {
  const topLine = useRef<SVGLineElement>(null);
  const bottomLine = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (!topLine.current || !bottomLine.current) return;

    if (isOpen) {
      animate(topLine.current, {
        x1: 5,
        y1: 5,
        x2: 11,
        y2: 11,
        rotate: 45,
        duration: 300,
        ease: 'out(3)',
      });

      animate(bottomLine.current, {
        x1: 5,
        y1: 11,
        x2: 11,
        y2: 5,
        rotate: -45,
        duration: 300,
        ease: 'out(3)',
      });
    } else {
      // Return to hamburger position
    }
  }, [isOpen]);

  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6 6L14 6'
        strokeWidth='2'
        strokeLinecap='round'
        stroke='currentColor'
      />
      <path
        d='M2 10L14 10'
        strokeWidth='2'
        strokeLinecap='round'
        stroke='currentColor'
      />
    </svg>
  );
}
