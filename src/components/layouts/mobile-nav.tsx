import React from 'react'
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger 
} from '../ui/sheet';
import { Button } from '../ui/button';
import Menu from '../icons/menu';
import Link from 'next/link';
import { GitHub } from '../icons/github';
import ToggleTheme from './toggle-theme';
import NavLinks from './nav-links/nav-links';

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={'ghost'}
          size={'icon'}
          aria-label='Menu'
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription>
            <div className="flex justify-center items-center py-6 gap-2">
              <div className="flex items-center">
                <Link
                  href={'github'}
                >
                  <Button variant={'ghost'} size={'icon'}>
                    <GitHub />
                  </Button>
                </Link>
              </div>
              <div>
                <ToggleTheme />
              </div>
            </div>
            <div>
              <div className="mt-3 flex flex-row gap-4">
                <NavLinks />
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav