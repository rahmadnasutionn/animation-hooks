"use client";
import { useState } from 'react';
import NavLinks from './nav-links';
import Logo from './logo';
import Link from 'next/link';
import { Button } from '../ui/button';
import { GitHub } from '../icons/github';
import { Twitter } from '../icons/twitter';
import ToggleTheme from './toggle-theme';
import useEventListener from '~/lib/hooks/use-event-listener';
import { cn } from '~/lib/utils';

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
          <Link href={'github'}>
            <Button className='flex items-center' variant={'ghost'} size={'icon'}>
              <GitHub />
            </Button>
          </Link>
          <Link 
            href={'github'}
            target='_blank'
            rel='noreferrer'
          >
            <Button className='flex items-center' variant={'ghost'} size={'icon'}>
              <Twitter />
            </Button>
          </Link>
          <ToggleTheme />
        </div>
      </nav>
    </header>
  )
}

export default MainNav