"use client";

import { cloneElement, useState } from 'react'
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from '../ui/card';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue 
} from '../ui/select';
import { generateZeros } from '~/lib/utils';
import { FadeDownStagger, FadeUpStagger, MultiDirectionSlide, StaggeredFadeIn, TypingEffect } from '~/variants/variant-preview';
import { CodeIcon, FlagTriangleLeft, FlagTriangleRight } from 'lucide-react';
import Reload from '../icons/reload';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Button } from '../ui/button';
import ChevronLeft from '../icons/chevron-left';
import ChevronRight from '../icons/chevron-right';
import Link from 'next/link';

function AnimationCarousel() {
  const [keys, setKeys] = useState(generateZeros(10));
  const [i, setI] = useState(0);
  const [key, setKey] = useState(0);

  const nextAnimation = () => {
    setI((prevI) => (prevI + 1) % variants.length);
  };

  const prevAnimation = () => {
    setI((prevI) => (prevI + variants.length - 1) % variants.length);
  };

  const resetAnimation = () => {
    setKey((prevKey) => prevKey + 1);
  };

  const variants = [
    {
      id: 1,
      name: 'Fade Down with Stagger',
      preview: <FadeDownStagger />
    },
    {
      id: 2,
      name: 'Fade Up with Stagger',
      preview: <FadeUpStagger />
    },
    {
      id: 3,
      name: 'Multi Direction Slide',
      preview: <MultiDirectionSlide />
    },
    {
      id: 4,
      name: 'Staggered Fade In',
      preview: <StaggeredFadeIn />
    },
    {
      id: 5,
      name: 'Typing Effect',
      preview: <TypingEffect />
    }
  ]

  const buttons = [
    {
      function: prevAnimation,
      tooltipText: 'Previous',
      icon: ChevronLeft,
    },
    {
      function: nextAnimation,
      tooltipText: 'Next',
      icon: ChevronRight
    },
    {
      function: resetAnimation,
      tooltipText: 'Reset',
      icon: Reload
    }
  ]
  return (
    <div>
      <Card className='bg-primary/5'>
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between space-x-1">
              <Select>
                <SelectTrigger className='w-[250px] bg-background'>
                  <SelectValue placeholder='search animation' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Animation</SelectLabel>
                    {variants.map((variant) => (
                      <SelectItem key={variant.id} value={variant.id.toString()}>
                        {variant.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="flex space-x-1 justify-end">
                {buttons.map((button, i) => (
                  <TooltipProvider key={i}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size={'icon'}
                          variant={'outline'}
                          onClick={button.function}
                        >
                          <button.icon />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          {button.tooltipText}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent>
          {cloneElement(variants[i].preview, { key: key })}
        </CardContent>

        <CardFooter className='flex justify-between items-center'>
          <CardDescription>
            <span>{variants[i].name}</span>
          </CardDescription>
          <Link
            href={
              `/text-variants#${variants[i].name.toLowerCase().split(' ').join('-')}`
            }
          >
            <Button aria-label='View' >
              <CodeIcon className='w-5 h-5 mr-2' />
              View
              <span className='sr-only'>View</span>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AnimationCarousel;