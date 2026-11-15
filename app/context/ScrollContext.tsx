'use client';

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';

interface ScrollContextType {
  scrolled: boolean;
  headerVisible: boolean;
}

const ScrollContext = createContext<ScrollContextType>({
  scrolled: true,
  headerVisible: true,
});

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(true);
  const [headerVisible, setHeaderVisible] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;

      setScrolled(currentScrollY > 10);

      if (currentScrollY < 80) {
        setHeaderVisible(true);
      } else if (difference > 3) {
        setHeaderVisible(false);
      } else if (difference < -3) {
        setHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    // Synchronize immediately on mount
    lastScrollY.current = window.scrollY;
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrolled, headerVisible }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  return useContext(ScrollContext);
}
