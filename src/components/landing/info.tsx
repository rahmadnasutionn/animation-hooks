"use client";

import { motion } from 'framer-motion';
import { 
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_UP_ANIMATION_VARIANTS 
} from '~/lib/animation';
import Image from 'next/image';
import Heart from '../icons/heart';
import { features } from '~/lib/utils';

function Info() {
  
  return (
    <div className='overflow-hidden py-24 mt-12 sm:py-32'>
      <div className="mx-auto max-w-7xl w-full px-4 lg:px-8">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 lg:max-w-none max-w-2xl gap-x-8 gap-y-6">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <motion.div
                animate='show'
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.15
                    }
                  }
                }}
              >
                <motion.h4 variants={FADE_UP_ANIMATION_VARIANTS} className='text-base font-semibold text-muted-foreground leading-7 sm:mt-32 lg:mt-0'>
                  Get started quickly
                </motion.h4>
                <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className='text-3xl mt-2 font-bold tracking-tight'>
                  Beatiful Framer Motion Animation
                </motion.p>
                <motion.p className='text-lg leading-8'>
                  Ready to use for your next projects
                </motion.p>

                <div className="max-w-xl lg:max-w-none mt-8 space-y-8 text-base leading-7">
                  {features.map(({ name, description }) => (
                    <motion.div
                      key={name}
                      variants={FADE_DOWN_ANIMATION_VARIANTS}
                      className='relative pl-9'
                    >
                      <dt className="inline font-semibold">
                        {/* <icon className='absolute left-1 top-1 h-5 w-5' /> */}
                        <Heart className='lucide lucide-heart absolute left-1 top-1 text-muted-foreground w-5 h-5' />
                        {name}
                      </dt>
                      <dd>{description}</dd>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
          <Image 
            src={'/ss.png'}
            alt='Landing Image'
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}

export default Info