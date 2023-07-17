"use client";

import { useState } from 'react'

import SearchBar from '~/components/text-variants/search-bar';
import { Button } from '~/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger 
} from '~/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from '~/components/ui/tooltip';
import { ScrollArea } from '~/components/ui/scroll-area';
import Reload from '~/components/icons/reload';

import { 
  FADE_DOWN_CODE, 
  FADE_UP_CODE, 
  MULTIDIRECTION_SLIDE_CODE, 
  STAGGERED_FADE_IN_CODE 
} from '~/variants/code-snippets';
import { 
  FadeDownStagger, 
  FadeUpStagger, 
  MultiDirectionSlide, 
  StaggeredFadeIn 
} from '~/variants/variant-preview';


function TextVariants() {
  let generateZeros = (n: number) => Array(n).fill(0);
  const [keys, setKeys] = useState(generateZeros(20));
  const variants = [
    {
      name: 'Fade Down with Stagger',
      preview: <FadeDownStagger key={keys[0]} />,
      code: FADE_DOWN_CODE
    },
    {
      name: 'Fade Down with Stagger',
      preview: <FadeUpStagger key={keys[1]} />,
      code: FADE_UP_CODE
    },
    {
      name: 'Multi Direction Slide',
      preview: <MultiDirectionSlide key={keys[2]} />,
      code: MULTIDIRECTION_SLIDE_CODE
    },
    {
      name: "Staggered Fade In",
      preview: <StaggeredFadeIn key={keys[3]} />,
      code: STAGGERED_FADE_IN_CODE,
    },
  ];

  function restartAnimation(index: number) {
    setKeys((prevKeys) => {
      const newKeys = [...prevKeys];
      newKeys[index] += 1;
      return newKeys;
    });
  }
  
  const [query, setQuery] = useState('');

  const filteredQuery = 
    query === ''
    ? variants
    : variants.filter((variant) => {
      return variant.name.toLowerCase().includes(query.toLowerCase().trim())
    })
  return (
      <div className="w-full">
        <div className="flex flex-col min-h-screen items-center py-2 space-y-12">
          <div className="mb-6 w-full">
            <SearchBar filteredQuery={filteredQuery} />
          </div>
          {filteredQuery.length > 0 ? (
            filteredQuery.map((variant, index) => (
              <Tabs defaultValue='preview' className='w-full' key={index}>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                  <div className="flex justify-between w-full mb-2 lg:mb-0">
                    <h1 
                      id={variant.name.toLowerCase().replace(" ", '-')}
                      className='text-xl'
                    >
                      {variant.name}
                    </h1>
                    <Button 
                      variant={'ghost'}
                      className='lg:hidden '
                      onClick={() => restartAnimation(index)}
                    >
                      <Reload className='w-4 h-4 ' />
                    </Button>
                  </div>
                  <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 space-x-0">
                    <TabsList className='grid grid-cols-2 w-[355px] lg:w-[400px]'>
                      <TabsTrigger value='preview'>Preview</TabsTrigger>
                      <TabsTrigger value='code'>Code</TabsTrigger>
                    </TabsList>

                    <div className="hidden lg:flex space-x-6">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button 
                              aria-label='Reload Animation'
                              onClick={() => restartAnimation(index)}
                            >
                              <Reload className='w-4 h-4 ' />
                              <span className='sr-only'>Reload Animation</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <span>Restart animation</span>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>

                <TabsContent value='preview'>
                  <div className="w-full mx-auto text-center bg-background p-4 border-2">
                    {variant.preview}
                  </div>
                </TabsContent>
                <TabsContent value='code'>
                  <div className='p-4'>
                    <ScrollArea className='h-96 bg-primary-foreground rounded-md p-4'>
                      <pre>
                        <code className='text-lg font-normal tracking-wide'>
                          {variant.code}
                        </code>
                      </pre>
                    </ScrollArea>
                  </div>
                </TabsContent>
              </Tabs>
            ))
          ) : (
            <p>No variants found</p>
          )}
        </div>
      </div>
  );
};

export default TextVariants;