'use client'
import Navbar from 'components/Navbar'
import PercentageBox from 'components/PercentageBox'
import { useApp } from 'context/AppContext'
import { motion } from 'framer-motion'
import { LOGO } from 'images'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { fadeOpacity_2 } from 'utils/Animations'

const BIBLE_SCRIPTURE = `"… e ainda há muitíssima terra para conquistar."`
const BIBLE_REFERENCE = `Josué 13.1`

export default function Home() {
  const [show, setShow] = useState(false)
  const [setScrollY] = useState(0)
  const { toggleFullscreen } = useApp()

  const handleClick = () => {
    toggleFullscreen()
    setShow((prev) => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className='w-full h-full z-10 flex justify-center overflow-y-auto'>
      <div className='w-full h-full flex flex-col items-center gap-11 md:w-3/5 p-4 z-10'>
        <Navbar handleModal={handleClick} />
        {!show && (
          <div className='w-full h-full text-center flex flex-col items-center justify-center gap-11'>
            <motion.div
              variants={fadeOpacity_2}
              initial='initial'
              animate='animate'
              custom={2}
            >
              <Image
                width={350}
                height={250}
                src={LOGO}
                alt='imagem de grupo de pessoas'
                priority
                className='max-w-sm'
              />
            </motion.div>
            <motion.div
              variants={fadeOpacity_2}
              initial='initial'
              animate='animate'
              custom={5}
              className='w-full flex flex-col gap-4 text-white'
            >
              <span className='text-2xl tracking-normal text-center italic'>
                {BIBLE_SCRIPTURE}
              </span>
              <span className='text-2xl'>{BIBLE_REFERENCE}</span>
            </motion.div>
          </div>
        )}
      </div>
      <PercentageBox show={show} close={() => setShow((prev) => !prev)} />
    </main>
  )
}
