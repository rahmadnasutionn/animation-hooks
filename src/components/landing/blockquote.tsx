"use client";

import { motion } from 'framer-motion'
import { pullupVariant } from '~/lib/animation';

function Blockquote() {
  const lettersFade = 'Variant Vault'.split("");
  return (
    <div className='relative mx-auto lg:mx-0'>
      <figure>
        <blockquote className='mt-6 text-lg font-semibold sm:text-sm sm:leading-8'>
          <motion.div
            initial="hidden"
            animate={"show"}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            <div className="flex justify-center">
              {lettersFade.map((txt, i) => (
                <motion.h3
                  key={i}
                  initial='hidden'
                  variants={pullupVariant}
                  custom={i}
                  animate='show'
                  className='text-white text-center md:text-7xl tracking-wide text-4xl font-medium'
                >
                  {txt === ' ' ? '' : txt}
                </motion.h3>
              ))}
            </div>
          </motion.div>
        </blockquote>
      </figure>
    </div>
  )
}

export default Blockquote