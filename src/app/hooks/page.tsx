import { Metadata } from 'next';
import React from 'react'
import HookList from '~/components/hooks/hook-list';
import { 
  USE_COPY_TO_CLIPBOARD,
  USE_DEBOUNCE,
  USE_DOCUMENT_TITLE,
  USE_EVENT_LISTENER,
  USE_IMAGE_ONLOAD,
  USE_INTERSECTION_OBSERVER,
  USE_ONCLICK_OUTSIDE,
  USE_WINDOW_SCROLL
} from '~/hooks/code-snippets';
import { 
  usageEventListener,
  useCopyToClipboard, 
  useDebounce, 
  useDocumentTitle, 
  useImageOnLoad, 
  useIntersectionObserver, 
  useOnclickOutside,
  useWindowScroll
} from '~/hooks/usage';

export const metadata: Metadata = {
  title: 'Hooks',
  description:
    'Custom hook'
};

export default function Hooks() {
  const hooks = [
    {
      title: 'useEventListener',
      description: 
        'Use EventListener with simplicity by React Hook.',
      usage: usageEventListener,
      hook: USE_EVENT_LISTENER,
    },
    {
      title: 'useIntersectionObserver',
      description:
        'This React Hook detects visibility of a component on the viewport using the natively present in the browser. It can be very useful to lazy-loading of images, implementing "infinite scrolling" or starting animations for example.',
      usage: useIntersectionObserver,
      hook: USE_INTERSECTION_OBSERVER,
    },
    {
      title: 'useCopyToClipboard',
      description:
        'This React hook provides a copy method to save a string in the and the copied value (default: null). if anything doesn"t work, it"s print a warning in the console and the value will be null',
      usage: useCopyToClipboard,
      hook: USE_COPY_TO_CLIPBOARD,
    },
    {
      title: 'useOnclickOutside',
      description:
        'React hook for listening for clicks outside of a specified element (see useRef). This can be useful for closing a modal, a dropdown menu etc.',
      usage: useOnclickOutside,
      hook: USE_ONCLICK_OUTSIDE
    },
    {
      title: 'useImageOnLoad',
      description:
        'A simple React Hook that helps you improve UX while images are loading. Rather than having an image that "unfolds" from top to bottom, we load a smaller version first which will be blurred and which will be replaced by the normal size image once loaded.',
      usage: useImageOnLoad,
      hook: USE_IMAGE_ONLOAD,
    },
    {
      title: 'useWindowScroll',
      description:
        'use-window-scroll returns current scroll position and a function to scroll smoothly to given position:',
      usage: useWindowScroll,
      hook: USE_WINDOW_SCROLL
    },
    {
      title: 'useDebounce',
      description:
        'This React hook helps to limit that the component is re-rendered too many times. Imagine that you want to execute a function on an event that executes several hundred times per second such as moving the mouse or scrolling. ',
      usage: useDebounce,
      hook: USE_DEBOUNCE
    },
    {
      title: 'useDocumentTitle',
      description:
        'Set document.title to given string',
      usage: useDocumentTitle,
      hook: USE_DOCUMENT_TITLE,
    }
  ];
  return (
    <main className="max-w-7xl mx-auto flex items-center w-full justify-center py-12">
      <div className="w-full">
        <div className="flex flex-col min-h-screen py-2 space-y-12 px-6">
          {hooks.map((hook) => (
            <HookList key={hook.title} {...hook} />
          ))}
        </div>
      </div>
    </main>
  );
};
