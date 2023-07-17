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

function ScrollToTop() {
  const [position, scrollTo] = useWindowScroll();

  return (
    <div className='fixed bottom-6 right-6 z-[999]'>
      {position.y > 100 && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button 
                className=''
                aria-label='Scroll To Top'
                variant={'outline'}
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