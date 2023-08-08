import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from '../ui/tooltip';

import { ScrollArea } from '../ui/scroll-area';
import { Button } from '../ui/button';
import Tick from '../icons/tick';
import Copy from '../icons/copy';

import {
  DEFINITIONS_VARIANTS
} from '~/lib/animation';
import { useConfetti } from '~/lib/hooks/use-confetti';
import usecopyToClipboard from '~/lib/hooks/usecopy-to-clipboard';

function AllVariants() {
  const [value, copy] = usecopyToClipboard();
  const { confettiFn, isAnimating } = useConfetti('confettiId', 'confetti');

  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>All Variants</AccordionTrigger>
        <AccordionContent>
          <ScrollArea className='h-96 bg-primary-foreground rounded-md p-4'>
            <span id='confettiId' />
            <Button
              size={'icon'}
              variant={'outline'}
              className='group/button absolute right-4 top-1.5 font-medium backdrop-blur-0 transition'
              onClick={() => {
                copy(DEFINITIONS_VARIANTS)
                confettiFn();
              }}
            >
              {value ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Tick className='w-6 h-6' />
                    </TooltipTrigger>
                    <TooltipContent>
                      <span aria-label='Copied'>Copied</span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Copy className='w-6 h-6 text-yellow-50' />
                    </TooltipTrigger>
                    <TooltipContent>
                      <span aria-label='Copy'>Copy</span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </Button>
            <pre>
              <code className='text-[16px] font-medium tracking-wide'>
                {DEFINITIONS_VARIANTS}
              </code>
            </pre>
          </ScrollArea>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AllVariants