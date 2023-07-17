"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FADE_DOWN_ANIMATION_VARIANTS } from '~/lib/animation';
import { toTitleCase } from '~/lib/utils';
import { Button } from '../ui/button';

function Hero({
  text,
  description,
}: {
  text: string,
  description: string,
}) {
  return (
    <div className='max-w-7xl mx-auto px-6 lg:px-8'>
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={'hidden'}
          viewport={{ once: true }}
          whileInView={'show'}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              }
            }
          }}
        >
          <motion.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className='text-4xl font-bold tracking-tight sm:text-6xl'
          >
            {toTitleCase(text)}
          </motion.h1>
          <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className='mt-6 text-lg leading-8 mb-8'
          >
            {description}
          </motion.p>

          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className='flex items-center justify-center gap-x-6'
          >
            <Link href={'/text-variants'} className='z-50'>
              <Button>
                Get Started
              </Button>
            </Link>
            <Link href={'/usage'} className='z-50'>
              <Button variant={'outline'}>
                Learn More &nbsp;<span aria-hidden='true'>{'->'}</span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero