import React from 'react'
import usecopyToClipboard from '~/lib/hooks/usecopy-to-clipboard';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { ScrollArea } from '../ui/scroll-area';
import { Button } from '../ui/button';
import Tick from '../icons/tick';
import Copy from '../icons/copy';

import {
  DEFINITIONS_VARIANTS
} from '~/lib/animation';
import { useToast } from '../ui/use-toast';

function AllVariants() {
  const [value, copy] = usecopyToClipboard();

  const { toast } = useToast();

  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>All Variants</AccordionTrigger>
        <AccordionContent>
          <ScrollArea className='h-96 bg-primary-foreground rounded-md p-4'>
            <Button
              size={'icon'}
              variant={'outline'}
              className='group/button absolute right-4 top-1.5 font-medium backdrop-blur-0 transition'
              onClick={() => {
                copy(DEFINITIONS_VARIANTS)
                toast({
                  title: 'Copied to clipboard'
                })
              }}
            >
              {value ? (
                <Tick className='w-6 h-6' />
              ) : (
                <Copy className='w-6 h-6 text-yellow-50' />
              )}
            </Button>
            <pre>
              <code className='text-sm font-medium tracking-wide'>
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