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
        x1: 3,
        y1: 3,
        x2: 13,
        y2: 13,
        duration: 300,
        ease: 'out(3)',
      });

      animate(bottomLine.current, {
        x1: 3,
        y1: 13,
        x2: 13,
        y2: 3,
        duration: 300,
        ease: 'out(3)',
      });
    } else {
      animate(topLine.current, {
        x1: 2,
        y1: 6,
        x2: 14,
        y2: 6,
        duration: 300,
        ease: 'out(3)',
      });

      animate(bottomLine.current, {
        x1: 2,
        y1: 10,
        x2: 14,
        y2: 10,
        duration: 300,
        ease: 'out(3)',
      });
    }
  }, [isOpen]);

  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <line
        ref={topLine}
        x1='2'
        y1='6'
        x2='14'
        y2='6'
        strokeWidth='1.5'
        strokeLinecap='round'
        stroke='currentColor'
      />

      <line
        ref={bottomLine}
        x1='2'
        y1='10'
        x2='14'
        y2='10'
        strokeWidth='1.5'
        strokeLinecap='round'
        stroke='currentColor'
      />
    </svg>
  );
}
