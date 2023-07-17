import React from 'react'
import { ScrollArea } from '../ui/scroll-area'

function HookList({ title, description, usage, hook }: HooksType) {
  return (
    <>
      <div className=''>
        <h1 className='text-4xl font-bold'>
          {title}
        </h1>
        <hr className='my-4' />
        <h2 className='text-lg font-normal tracking-normal'>
          {description}
        </h2>
      </div>
      <div className="w-full flex flex-col">
        <h3 className='text-3xl font-semibold tracking-wide mb-4'>Usage</h3>
        <div className="p-4 mb-6">
          <div  className='h-auto border-2 bg-primary-foreground rounded-md p-4 overflow-x-auto'>
            <pre className='overflow-x-auto px-2 w-auto'>
              <code className='font-mono text-base'>
                {usage}
              </code>
            </pre>
          </div>
            </div>
              <h4 className='text-3xl font-semibold tracking-wide mb-4'>Hook</h4>
        <div className="p-4 mb-6">
          <div className='h-auto bg-primary-foreground rounded-md p-4 border-2 border-gray-700 overflow-x-auto'>
            <pre>
              <code>
                {hook}
              </code>
                </pre>
          </div>
        </div>
      </div>
    </>
  )
}

export default HookList