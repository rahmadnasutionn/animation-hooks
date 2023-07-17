"use client";

import { useState } from 'react';
import Link from 'next/link';
import useEventListener from '~/lib/hooks/use-event-listener';
import { cn } from '~/lib/utils';
import * as config from '~/lib/config';

import Logo from './logo';
import { Button } from '../ui/button';
import { GitHub } from '../icons/github';
import ToggleTheme from './toggle-theme';
import NavLinks from './nav-links';

function MainNav() {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEventListener('scroll', handleScroll);

  return (
    <header 
      className={cn(
        'sticky top-0 z-50 transition-all duration-200',
        isScroll ? 'bg-background/80 backdrop-blur-2xl border-b' : ''
      )}
    >
      <nav className="mx-auto max-w-7xl w-full flex items-center justify-between p-2 lg:px-8">
        <div className="flex items-center gap-x-12 z-50">
          <Logo />
          <div className="hidden lg:flex lg:gap-x-12">
            <NavLinks />
          </div>
        </div>
        <div className="hidden lg:flex space-x-1 z-50">
          <Link 
            href={config.githubRepo}
            rel={config.githubRepo ? 'referrer' : ''}
          >
            <Button
              type='button' 
              aria-label='Github'
              className='flex items-center' 
              variant={'ghost'} 
              size={'icon'}
            >
              <GitHub />
              <span className='sr-only' aria-hidden='true'>Github</span>
            </Button>
          </Link>
          <ToggleTheme />
        </div>
      </nav>
    </header>
  )
}

export default MainNav