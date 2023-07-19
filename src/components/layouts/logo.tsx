"use client";

import  Link from 'next/link';
import { usePathname } from "next/navigation"
import { Button } from '../ui/button';

function Logo() {
  const pathname = usePathname();
  return (
    <div>
      <div className="mx-auto">
        {pathname === '/' ? (
          <span className='text-2xl tracking-normal text-muted-foreground'>
            Animation And Hooks
          </span>
        ) : (
          <Link
            href={'/'}
            
          >
            <Button
              aria-label='Home'
              variant={'ghost'}
              className='text-2xl text-muted-foreground tracking-normal'
            >
              Animation and Hooks
              <span className='sr-only' aria-hidden='true'>
                Home
              </span>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Logo;