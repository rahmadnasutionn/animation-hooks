"use client";

import * as React from 'react'
import useEventListener from '~/lib/hooks/use-event-listener';

import { Button } from '../ui/button'
import { 
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command';

import { CodeIcon } from 'lucide-react';

interface Variants {
  name: string;
  preview: any;
  code: string;
}

interface SearchBarType {
  filteredQuery: Variants[]
}

function SearchBar({ filteredQuery }: SearchBarType) {
  const [open, setOpen] = React.useState(false);

  const handleKeyboardEvent = (event: KeyboardEvent) => {
    if (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      setOpen(true);
    }
  };

  useEventListener('keydown', handleKeyboardEvent);

  return (
    <div className='w-full'>
      <Button 
        variant={'outline'}
        className='relative w-full justify-start text-sm text-muted-foreground'
        onClick={() => setOpen(true)}
      >
        <span className='hidden lg:inline-flex'>Search variants...</span>
        <span className='lg:hidden inline-flex'>Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">ctrl+</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search' />
        <CommandList>
          <CommandEmpty>No results found...</CommandEmpty>
          <CommandGroup heading='Text variants'>
            {filteredQuery.map(({ name }) => (
              <CommandItem
                key={name}
                onSelect={() => {
                  window.location.href = `#${name}`
                    .toLowerCase()
                    .replace(' ', '-')
                  setOpen(false);
                }}
              >
                <CodeIcon className='w-4 h-4 mx-2' />
                <span>
                  {name}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default SearchBar;