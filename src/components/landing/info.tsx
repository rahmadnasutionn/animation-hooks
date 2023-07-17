"use client";

import { motion } from 'framer-motion';
import { FADE_DOWN_ANIMATION_VARIANTS, FADE_UP_ANIMATION_VARIANTS } from '~/lib/animation';
import Image from 'next/image';
import Heart from '../icons/heart';

function Info() {
    const features = [
        {
          name: "2M+ Weekly Framer Motion Users.",
          description:
            "Framer Motion is one of the most popular animation library for React. Find some quick and easy to use animations for your next project.",
        },
        {
          name: "Easy Integration.",
          description:
            "All the variants are super easy to integrate into your own project. Just copy and paste.",
        },
        {
          name: "Beautiful Animations.",
          description:
            "Hand crafted animations that are simple, subtle, and beautiful.",
        },
      ];
  return (
    <div className='overflow-hidden py-24 mt-12'>
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
                <motion.h4 variants={FADE_UP_ANIMATION_VARIANTS} className='text-base font-semibold text-muted-foreground leading-7'>
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
            src={'/landing.jpeg'}
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