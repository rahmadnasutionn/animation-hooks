"use client";

import { useState, useEffect } from 'react';
import useEventListener from "./use-event-listener";

interface ScrollPosition {
  x: number;
  y: number;
};

function getScrollPosition(): ScrollPosition {
  return typeof window !== 'undefined'
  ? { x: window.pageXOffset, y: window.pageYOffset }
  : { x: 0, y: 0 };
};

function scrollTo({ x, y }: Partial<ScrollPosition>) {
  if (typeof window !== 'undefined') {
    const scrollOptions: ScrollToOptions = {
      behavior: 'smooth',
    };

    if (typeof x === 'number') {
      scrollOptions.left = x;
    }

    if (typeof y === 'number') {
      scrollOptions.top = y;
    }

    window.scrollTo(scrollOptions);
  }
}

function useWindowScroll() {
  const [position, setPosition] = useState<ScrollPosition>({ x: 0, y: 0 })

  useEventListener('scroll', () => setPosition(getScrollPosition()))
  useEventListener('resize', () => setPosition(getScrollPosition()))

  useEffect(() => {
    setPosition(getScrollPosition());
  }, [])
  
  return [position, scrollTo] as const
};

export default useWindowScroll