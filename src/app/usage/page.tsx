import { Metadata } from 'next';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '~/components/ui/accordion';
import Discover from '~/components/usage/discover';
import Hero from '~/components/usage/hero';

import { faqs } from '~/lib/utils';

export const metadata: Metadata = {
  title: 'Usage',
  description: 
    'Usage animation and hooks'
};

function Usage() {
  return (
    <div>
      <div className='max-w-7xl mx-auto px-6 py-12 sm:py-24 lg:px-8'>
        <Hero 
          text='Animation and hooks Usage Guide'
          description='Using Animation and Hooks is easy. All you need to do is install Framer
          Motion and copy and paste the code into your project.'
        />
        <Discover
          title='Discover beautiful variants for your next project now!'
          description='Thank you for using Animation and Hooks. I hope you enjoy it.'
        />

        <div className="mt-20">
          <Accordion type='single' collapsible className='w-full'>
            {faqs.map(({ id, question, answer }) => (
              <AccordionItem value={`value-${id}`} key={id}>
                <AccordionTrigger className='text-2xl font-semibold'>
                  {question}
                </AccordionTrigger>
                <AccordionContent className='text-lg tracking-wide'>
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Usage;