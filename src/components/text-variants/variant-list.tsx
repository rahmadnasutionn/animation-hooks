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

interface VariantList {
  variant: VariansType;
  index?: number;
  restartAnimation?: (index: number) => void;
}

function VariantList({ variant, index, restartAnimation }: VariantList) {
  return (
    <Tabs defaultValue='preview' className='w-full' key={index}>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="flex justify-between w-full mb-2 lg:mb-0">
          <h1 
            id={variant.name.toLowerCase().split(" ").join('-')}
            className='text-xl'
          >
            {variant.name}
          </h1>
          <Button 
            variant={'ghost'}
            className='lg:hidden'
             /* @ts-ignore */
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
                  /* @ts-ignore */
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
          <ScrollArea className='h-96 overflow-auto bg-primary-foreground rounded-md p-4'>
            <pre>
              <code className='text-lg font-normal tracking-wide'>
                {variant.code}
              </code>
            </pre>
          </ScrollArea>
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default VariantList