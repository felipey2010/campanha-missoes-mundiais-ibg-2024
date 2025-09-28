'use client'
import Navbar from 'components/Navbar'
import PercentageBox from 'components/PercentageBox'
import { useApp } from 'context/AppContext'
import { motion } from 'framer-motion'
import { LOGO } from 'images'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { fadeOpacity_2 } from 'utils/Animations'

const BIBLE_SCRIPTURE = `"O Senhor disse a Moisés: - Por que clamas a mim? Diga ao povo que marche."`
const BIBLE_REFERENCE = `Êxodo 14:15`

export default function Home() {
  const [show, setShow] = useState(false)
  const [scrollY, setScrollY] = useState(0)
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
    <main className='w-full h-full z-10 flex justify-center overflow-hidden'>
      <div className='w-full h-full flex flex-col items-center gap-11 md:w-3/5 p-4 z-10'>
        <Navbar handleModal={handleClick} />
        <div className='w-full h-full text-center flex flex-col items-center justify-center gap-11'>
          <motion.div
            variants={fadeOpacity_2}
            initial='initial'
            animate='animate'
            custom={2}
          >
            <Image
              width={500}
              height={400}
              src={LOGO}
              alt='imagem de grupo de pessoas'
              priority
            />
            {/* <CampaignLogo /> */}
          </motion.div>
          <motion.div
            variants={fadeOpacity_2}
            initial='initial'
            animate='animate'
            custom={5}
            className='w-full flex flex-col gap-4 text-white'
          >
            <span className='text-3xl tracking-normal text-center'>
              {BIBLE_SCRIPTURE}
            </span>
            <span className='text-2xl'>{BIBLE_REFERENCE}</span>
          </motion.div>
        </div>
      </div>
      {/* <motion.div
        variants={fadeOpacity_2}
        initial='initial'
        animate='animate'
        custom={8}
        className='absolute bottom-0 sm:-bottom-8 md:-bottom-10 left-0 right-0 bg-transparent flex items-center justify-center -z-[1]'
      >
        <Image
          width={1000}
          height={1000}
          src={BG_01}
          alt='imagem de grupo de pessoas'
          priority
        />
      </motion.div> */}
      <PercentageBox show={show} close={handleClick} />
    </main>
  )
}
