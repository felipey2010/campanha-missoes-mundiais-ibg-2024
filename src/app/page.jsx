'use client'
import Navbar from 'components/Navbar'
import PercentageBox from 'components/PercentageBox'
import { useApp } from 'context/AppContext'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { fadeOpacity_2 } from 'utils/Animations'

const BIBLE_SCRIPTURE = `"Como, pois, invocarão aquele em quem não creram? E como crerão naquele de quem não ouviram falar? E como ouvirão, se não houver quem pregue? E como pregarão, se não forem enviados?"`
const BIBLE_REFERENCE = `Romanos 10:14, 15`

export default function Home() {
  const [show, setShow] = useState(false)
  const { toggleFullscreen } = useApp()

  const handleClick = () => {
    toggleFullscreen()
    setShow((prev) => !prev)
  }

  return (
    <main className='relative z-10 flex w-full flex-1 justify-center'>
      <div className='flex w-full max-w-5xl flex-1 flex-col items-center gap-5 px-4 pb-8 pt-4 sm:gap-8 sm:px-6 sm:pb-10 sm:pt-6 lg:px-8'>
        <Navbar handleModal={handleClick} />
        {!show && (
          <section className='flex w-full flex-1 flex-col items-center justify-center gap-6 py-4 text-center sm:gap-9 sm:py-6 lg:gap-11'>
            <motion.div
              variants={fadeOpacity_2}
              initial='initial'
              animate='animate'
              custom={2}
              className='flex w-full items-center justify-center'
            >
              <Image
                width={350}
                height={350}
                src='/assets/logo_missoes_nacionais_2026.png'
                alt='imagem da campanha de missões'
                priority
                sizes='(max-width: 640px) 78vw, (max-width: 1024px) 420px, 500px'
                className='h-auto w-[min(78vw,500px)] max-h-[42svh] object-contain sm:w-[min(62vw,460px)] lg:w-[500px]'
              />
            </motion.div>
            <motion.div
              variants={fadeOpacity_2}
              initial='initial'
              animate='animate'
              custom={5}
              className='flex w-full max-w-4xl flex-col gap-2 text-white sm:gap-3'
            >
              <blockquote className='text-balance text-base font-semibold italic leading-relaxed tracking-normal sm:text-xl md:text-2xl'>
                {BIBLE_SCRIPTURE}
              </blockquote>
              <cite className='text-sm font-semibold not-italic sm:text-lg md:text-xl'>
                {BIBLE_REFERENCE}
              </cite>
            </motion.div>
          </section>
        )}
      </div>
      <PercentageBox show={show} close={() => setShow((prev) => !prev)} />
    </main>
  )
}
