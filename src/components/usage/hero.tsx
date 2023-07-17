"use client"

import { motion } from "framer-motion"
import { FADE_DOWN_ANIMATION_VARIANTS } from "~/lib/animation"
import { toTitleCase } from "~/lib/utils"
import CopyToClipboard from "./copy-to-clipboard"
import AllVariants from "./all-variants"

function Hero({
  text,
  description,
}: {
  text: string,
  description: string,
}) {
  return (
    <div>
      <motion.div
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true }}
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
          className="text-4xl font-bold tracking-tight sm:text-6xl"
        >
          {toTitleCase(text)}
        </motion.h1>

        <motion.p
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="mt-6 text-lg leading-8"
        >
          {description}
        </motion.p>

        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="w-full mt-10 flex items-center justify-center gap-x-6"
        >
          <div className="not-prose my-6 rounded-2xl w-full bg-primary-foreground">
            <div className="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-2 rounded-t-lg border bg-primary-foreground px-4">
              <h3 className="mr-auto pt-3 text-xs font-semibold ">
                Step 1: Install Framer Motion
              </h3>
            </div>
            <div className="group border-1 border-r border-b rounded-b-lg">
              <div className="relative">
                <pre className="overflow-x-auto p-4 text-xs">
                  <code className="language-bash">
                    <span>
                      <span>npm install framer-motion</span>
                    </span>
                  </code>
                </pre>

                <CopyToClipboard />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          whileInView={'show'} 
          variants={FADE_DOWN_ANIMATION_VARIANTS} 
          
          className="w-full mt-10"
        >
          <motion.div className="w-full mt-10 gap-x-6">
            <p className="text-lg">
              Here are all the variant definitions in case you want to make a
              constants file.
            </p>
            <br />
            <AllVariants />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero