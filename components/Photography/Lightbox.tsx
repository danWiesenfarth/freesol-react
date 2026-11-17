'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import ChevronLeft from '../UI/ChevronLeft';
import ChevronRight from '../UI/ChevronRight';
import Close from '../UI/Close';

interface LightboxProps {
  photos: {
    src: string;
    alt: string;
  }[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  photos,
  activeIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const isOpen =
    activeIndex !== null && activeIndex >= 0 && activeIndex < photos.length;

  const activePhoto = isOpen ? photos[activeIndex] : null;

  // Prevent background scrolling
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen || activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();

      if (event.key === 'ArrowRight') {
        onNavigate((activeIndex + 1) % photos.length);
      }

      if (event.key === 'ArrowLeft') {
        onNavigate((activeIndex - 1 + photos.length) % photos.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, activeIndex, photos.length, onClose, onNavigate]);

  if (!isOpen || !activePhoto || activeIndex === null) return null;

  const previousPhoto = () => {
    onNavigate((activeIndex - 1 + photos.length) % photos.length);
  };

  const nextPhoto = () => {
    onNavigate((activeIndex + 1) % photos.length);
  };

  // Swipe navigation
  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    const deltaY = event.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      nextPhoto();
    } else {
      previousPhoto();
    }
  };

  return (
    <div
      className='
        fixed inset-0 z-[10000]
        flex items-center justify-center
        bg-black/98 p-4
      '
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      role='dialog'
      aria-modal='true'
      aria-label='Photo lightbox'
    >
      <div className='absolute inset-0' onClick={onClose} aria-hidden='true' />

      {/* Close */}
      <button
        type='button'
        onClick={onClose}
        aria-label='Close lightbox'
        className='
          absolute right-6 top-6 z-20
          text-zinc-200 transition-colors
          hover:text-white cursor-pointer
          hover:scale-115 active:scale-105
        '
      >
        <Close size={32} />
      </button>

      {/* Previous */}
      {photos.length > 1 && (
        <button
          type='button'
          onClick={previousPhoto}
          aria-label='Previous photo'
          className='
            absolute left-4 top-1/2 z-20
            -translate-y-1/2
            p-3 text-zinc-200
            transition-colors hover:text-white
            cursor-pointer hover:scale-115 active:scale-105
          '
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {/* Image */}
      <div
        className='
          relative z-10
          h-full w-full max-h-[90vh] max-w-[90vw]
        '
        onTouchStart={handleTouchStart}
        onClick={onClose}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: 'pan-y' }}
      >
        <Image
          src={activePhoto.src}
          alt={activePhoto.alt}
          fill
          sizes='90vw'
          priority
          draggable={false}
          className='object-contain select-none'
        />
      </div>

      {/* Next */}
      {photos.length > 1 && (
        <button
          type='button'
          onClick={nextPhoto}
          aria-label='Next photo'
          className='
            absolute right-4 top-1/2 z-20
            -translate-y-1/2
            p-3 text-zinc-200
            transition-colors hover:text-white
            cursor-pointer hover:scale-115 active:scale-105
          '
        >
          <ChevronRight size={32} />
        </button>
      )}

      {/* Counter */}
      <p
        className='
          absolute bottom-4 z-20
          font-sans-alt text-sm text-white/60
        '
      >
        {activeIndex + 1} / {photos.length}
      </p>
    </div>
  );
}
