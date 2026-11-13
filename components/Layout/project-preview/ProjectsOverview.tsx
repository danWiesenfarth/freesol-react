'use client';

import { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';

import Project from './Project';
import { projectOverview } from '@/data/photos.data';

export default function ProjectsOverview() {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const isAnimatingRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const totalProjects = projectOverview.length;

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

  const slides = [
    ...projectOverview.slice(-visibleCount),
    ...projectOverview,
    ...projectOverview.slice(0, visibleCount),
  ];

  const getTranslateX = (position: number) =>
    `${-(position * (100 / slides.length))}%`;

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

  if (totalProjects === 0) return null;

  return (
    <section className='w-full overflow-hidden'>
      <div className='overflow-hidden'>
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

      <div className='mt-8 flex items-center justify-between'>
        <button
          onClick={() => navigate(-1)}
          aria-label='Previous project'
          disabled={totalProjects <= visibleCount}
        >
          Previous
        </button>

        <span className='font-sans-alt font-medium text-zinc-500'>
          {activeIndex + 1} / {totalProjects}
        </span>

        <button
          onClick={() => navigate(1)}
          aria-label='Next project'
          disabled={totalProjects <= visibleCount}
        >
          Next
        </button>
      </div>
    </section>
  );
}
