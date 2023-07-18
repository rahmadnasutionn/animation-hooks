"use client";

import { usePathname } from 'next/navigation';
import {
  cn,
  navItems,
  toTitleCase,
} from '~/lib/utils';
import Link from 'next/link';

function NavLinks() {
  const pathname = usePathname();

  return (
    <div className='flex items-center space-x-6'>
      {navItems.map(({ label, url }) => (
        <Link
          key={label}
          className={cn(
            'transition-colors hover:text-foreground/80 text-[18px]',
            pathname === `/${url}` ? 'text-foreground' : 'text-foreground/60'
          )}
          href={`/${url}`}
        >
          {toTitleCase(label)}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;