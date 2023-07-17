import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import Tick from '../icons/tick';
import Copy from '../icons/copy';
import usecopyToClipboard from '~/lib/hooks/usecopy-to-clipboard';
import { useToast } from '~/lib/hooks/use-toast';

function CopyToClipboard() {
  const [value, copy] = usecopyToClipboard();
  const { toast } = useToast();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          size={'icon'}
          variant={'outline'}
          className='group/button opacity-0 group-hover:opacity-100 focus:opacity-100 absolute right-2 top-1.5 overflow-hidden text-2xl'
        >
          {value ? (
            <Tick className='w-6 h-6' />
          ) : (
            <Copy className='w-6 h-6 text-yellow-50' />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-24 mr-24'>
        <DropdownMenuGroup>
          {['npm', 'yarn', 'pnpm'].map((cmd) => (
            <DropdownMenuItem 
              key={cmd}
              onSelect={() => {
                copy(`${cmd} install framer-motion`)
                toast({
                  title: `copied ${cmd} to clipboard`,
                  description: `${cmd === 'yarn' ? 'add' : 'install'} framer-motion`
                })
               }
              }
            >
              {cmd}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CopyToClipboard
