"use client";

import { motion } from 'framer-motion';
import { FADE_UP_ANIMATION_VARIANTS } from '~/lib/animation';

function Features() {
  return (
    <motion.div
      animate='show'
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15
          }
        }
      }}
    >
      <div className="mx-auto mt-12 max-w-7xl px-6 sm:mt-56">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            variants={FADE_UP_ANIMATION_VARIANTS}
            className='text-base font-semibold leading-7 text-muted-foreground'
          >
            Everything you need
          </motion.h2>
          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            className='text-3xl tracking-wide'
          >
            Beautiful Framer Motion Animations
          </motion.p>
          <motion.p
            className='mt-6 leading-4'
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            This example contains the fade up animation variant.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Features;