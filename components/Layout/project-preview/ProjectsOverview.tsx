'use client';

import { useEffect, useRef, useState } from 'react';
import type { TouchEvent, WheelEvent } from 'react';
import { animate } from 'animejs';

import Project from './Project';
import ChevronLeft from '@/components/UI/ChevronLeft';
import ChevronRight from '@/components/UI/ChevronRight';

import type { PhotoProjectPreview } from '@/data/interfaces/photo.interface';

interface ProjectsOverviewProps {
  content: PhotoProjectPreview[];
}

export default function ProjectsOverview({ content }: ProjectsOverviewProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const isAnimatingRef = useRef(false);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const totalProjects = content.length;

  const slides = [
    ...content.slice(-visibleCount),
    ...content,
    ...content.slice(0, visibleCount),
  ];

  const getTranslateX = (position: number) =>
    `${-(position * (100 / slides.length))}%`;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const updateVisibleCount = () => {
      setVisibleCount(mediaQuery.matches ? 1 : 3);
    };

    updateVisibleCount();
    mediaQuery.addEventListener('change', updateVisibleCount);

    return () => {
      mediaQuery.removeEventListener('change', updateVisibleCount);
    };
  }, []);

  useEffect(() => {
    positionRef.current = visibleCount;
    isAnimatingRef.current = false;

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${getTranslateX(visibleCount)})`;
    }
  }, [visibleCount]);

  function navigate(direction: number) {
    const track = trackRef.current;

    if (!track || isAnimatingRef.current || totalProjects <= visibleCount) {
      return;
    }

    isAnimatingRef.current = true;

    const nextPosition = positionRef.current + direction;

    animate(track, {
      translateX: getTranslateX(nextPosition),
      duration: 300,
      ease: 'out(4)',
      onComplete: () => {
        let correctedPosition = nextPosition;

        if (nextPosition >= totalProjects + visibleCount) {
          correctedPosition = nextPosition - totalProjects;
        }

        if (nextPosition < visibleCount) {
          correctedPosition = nextPosition + totalProjects;
        }

        if (correctedPosition !== nextPosition) {
          track.style.transform = `translateX(${getTranslateX(correctedPosition)})`;
        }

        positionRef.current = correctedPosition;

        setActiveIndex(
          (correctedPosition - visibleCount + totalProjects) % totalProjects,
        );

        isAnimatingRef.current = false;
      },
    });
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    const deltaY = event.changedTouches[0].clientY - touchStartY.current;

    const swipeThreshold = 50;

    if (
      Math.abs(deltaX) < swipeThreshold ||
      Math.abs(deltaX) < Math.abs(deltaY)
    ) {
      return;
    }

    navigate(deltaX < 0 ? 1 : -1);
  }

  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    const deltaX = event.shiftKey ? event.deltaY : event.deltaX;
    const deltaY = event.shiftKey ? 0 : event.deltaY;

    if (Math.abs(deltaX) < 30 || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    navigate(deltaX > 0 ? 1 : -1);
  }

  if (totalProjects === 0) return null;

  return (
    <section className='flex w-full flex-col items-center overflow-hidden'>
      <div className='h-px w-full bg-zinc-200 mt-8 mb-4'></div>
      <h2 className='text-3xl mb-4 font-semibold text-zinc-900 mr-auto'>
        Discover more of our work
      </h2>
      <div
        className='w-full overflow-hidden'
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
        style={{ touchAction: 'pan-y' }}
      >
        <div
          ref={trackRef}
          className='flex will-change-transform'
          style={{
            width: `${(slides.length / visibleCount) * 100}%`,
            transform: `translateX(${getTranslateX(visibleCount)})`,
          }}
        >
          {slides.map((project, index) => (
            <div
              key={`${project.src}-${index}`}
              className='shrink-0'
              style={{
                width: `${100 / slides.length}%`,
              }}
            >
              <Project {...project} />
            </div>
          ))}
        </div>
      </div>

      <div className='my-8 flex max-w-4xl gap-4 items-center justify-between px-2'>
        <button
          type='button'
          onClick={() => navigate(-1)}
          aria-label='Previous project'
          disabled={totalProjects <= visibleCount}
          className='cursor-pointer transition-transform hover:scale-115 active:scale-105 disabled:cursor-not-allowed disabled:opacity-30'
        >
          <ChevronLeft size={32} />
        </button>

        <span className='font-sans-alt font-medium text-zinc-900'>
          {activeIndex + 1} / {totalProjects}
        </span>

        <button
          type='button'
          onClick={() => navigate(1)}
          aria-label='Next project'
          disabled={totalProjects <= visibleCount}
          className='cursor-pointer transition-transform hover:scale-115 active:scale-105 disabled:cursor-not-allowed disabled:opacity-30'
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
}
