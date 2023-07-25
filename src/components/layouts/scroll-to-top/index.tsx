"use client";

import useWindowScroll from '~/lib/hooks/use-window-scroll';

import { Button } from '../../ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from '../../ui/tooltip';
import ArrowUp from '../../icons/arrow-up';
import { useState } from 'react';
import useEventListener from '~/lib/hooks/use-event-listener';
import { cn } from '~/lib/utils';

function ScrollToTop() {
  const [position, scrollTo] = useWindowScroll();

  const [isHidden, setIsHidden] = useState(false);
  const [isScroll, setIsScroll] = useState(0);

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    const isVisible = currentScroll < isScroll;

    setIsHidden(isVisible);
    setIsScroll(currentScroll);
  }

  useEventListener('scroll', handleScroll);

  return (
    <div className={cn(
      'fixed bottom-6 right-6 z-[999]',
      isHidden ? 'opacity-100 visible transition-all duration-200' : 'opacity-0 invisible transition'
    )}>
      {position.y > 100 && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button 
                aria-label='Scroll To Top'
                onClick={() => scrollTo({ y: 0 })}
              >
                <ArrowUp width={24} height={24} />
                <span className='sr-only' aria-hidden='true'>Scroll to Top</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <span>Back to Top</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  )
}

export default ScrollToTop