export const USE_EVENT_LISTENER = `
"use client";

import { RefObject, useRef, useEffect } from 'react';

export default function useEventListener<T extends HTMLElement = HTMLDivElement>(
  eventName: string,
  handler: Function,
  element?: RefObject<T>
) {
  const saveHandler = useRef<Function>();

  useEffect(() => {
    saveHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      const targetElement: T | Window = element?.current || window;

      if (!(targetElement && targetElement.addEventListener)) {
        return;
      }

      const eventListener = (event: Event) => {
        if (!!saveHandler.current) {
          saveHandler.current(event);
        }
      }

      targetElement.addEventListener(eventName, eventListener);

      return () => targetElement.removeEventListener(eventName, eventListener);
    },
    [eventName, element]
  )
}`

export const USE_INTERSECTION_OBSERVER = `
import { useState, useEffect } from 'react';

interface ExtendedEntry extends IntersectionObserverEntry {
  isVisible: boolean
}

interface Args extends IntersectionObserverInit {
  onAppearOnly?: boolean
}

type Return<T> = [(node: T) => void, ExtendedEntry?]

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  root = null,
  rootMargin = '0%',
  onAppearOnly = false,
}: Args): Return<T> {
  const [entry, setEntry] = useState<ExtendedEntry>();
  const [node, setNode] = useState<T>();
  const observer = useRef<IntersectionObserver | null>(null);

  const noUpdate = entry?.isVisible && onAppearOnly;

  useEffect(() => {
    if (!window?.IntersectionObserver || noUpdate) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const isVisible = entries[0].intersectionRatio > 0;
        setEntry({ ...entries[0], isVisible })
      },
      {
        threshold,
        root,
        rootMargin
      }
    )

    const { current: currentObserver } = observer;

    if (node) currentObserver.observe(node);

    return () => {
      currentObserver.disconnect()
    }
  }, [node, threshold, root, rootMargin, noUpdate]);

  return [setNode, entry];
};`

export const USE_COPY_TO_CLIPBOARD = `
"use client";

import { useState } from 'react';

type CopiedValue = string | null;
type CopyFn = (text: string) => void;

export default function usecopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copy: CopyFn = async text => {
    if (!navigator.clipboard) {
      alert('Clipboard not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 1000);
    } catch (error) {
      console.warn('Copy failed', error);
      return false;
    }
  }

  return [copiedText, copy];
}`;

export const USE_ONCLICK_OUTSIDE = `
import { RefObject } from 'react'

import { useEventListener } from '~/lib/hooks';

type Handler = (event: MouseEvent) => void

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
): void {
  useEventListener(mouseEvent, event => {
    const el = ref?.current

    // Do nothing if clicking ref's element or descendent elements
    if (!el || el.contains(event.target as Node)) {
      return
    }

    handler(event)
  })
}`;

export const USE_IMAGE_ONLOAD = `
import { CSSProperties, useState } from 'react'

interface ImageStyle {
  thumbnail: CSSProperties
  fullSize: CSSProperties
}

interface ImageOnLoadType {
  handleImageOnLoad: () => void
  css: ImageStyle
}

export function useImageOnLoad(): ImageOnLoadType {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  // Triggered when full image will be loaded.
  const handleImageOnLoad = () => {
    setIsLoaded(true)
  }

  const css: ImageStyle = {
    // Thumbnail style.
    thumbnail: {
      visibility: isLoaded ? 'hidden' : 'visible',
      filter: 'blur(8px)',
      transition: 'visibility 0ms ease-out 500ms',
    },
    // Full image style.
    fullSize: {
      opacity: isLoaded ? 1 : 0,
      transition: 'opacity 500ms ease-in 0ms',
    },
  }

  return { handleImageOnLoad, css }
}`;

export const USE_WINDOW_SCROLL = `
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

const isReduceMotion =
  typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false;

function scrollTo({ x, y }: Partial<ScrollPosition>) {
  if (typeof window !== 'undefined') {
    const scrollOptions: ScrollToOptions = {
      behavior: isReduceMotion ? 'auto' : 'smooth',
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

export default useWindowScroll`;

export const USE_DEBOUNCE = `
import { useState, useEffect } from 'react'

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    }
  }, [delay, value]);

  return debouncedValue;
}`;

export const USE_DOCUMENT_TITLE = `
import { useState, useEffect } from 'react'

export function useDocumentTitle(title: string): void {
  useEffect(() => {
    window.document.title = title + 'React';
  }, [title]);
}
`