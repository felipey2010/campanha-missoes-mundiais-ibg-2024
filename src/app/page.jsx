'use client'
import BatteryLevel from 'components/BatteryLevel'
import CampaignLogo from 'components/Logo/CampaignLogo'
import Navbar from 'components/Navbar'
import { motion } from 'framer-motion'
import { BG_01, IMG_TEMA } from 'images'
import Image from 'next/image'
import { useState } from 'react'
import { fadeOpacity_2 } from 'utils/Animations'

export default function Home() {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow((prev) => !prev)
  }

  return (
    <main className='w-full h-full flex justify-center relative overflow-hidden'>
      <div className='w-full h-full flex flex-col items-center gap-11 md:w-3/5 p-4'>
        <Navbar handleModal={handleClick} />
        <div className='w-full h-full text-center flex flex-col items-center gap-11'>
          <motion.div
            variants={fadeOpacity_2}
            initial='initial'
            animate='animate'
            custom={2}
          >
            <CampaignLogo />
          </motion.div>
          <motion.div
            variants={fadeOpacity_2}
            initial='initial'
            animate='animate'
            custom={5}
            className='w-full flex flex-col gap-4 text-white bg-black'
          >
            <span className='text-2xl tracking-normal text-center'>
              E disse-lhes: "Vão pelo mundo todo e preguem o evangelho a todas
              as pessoas."
            </span>
            <span className='text-lg'>Marcos 16:15</span>
          </motion.div>
        </div>
      </div>
      <motion.div
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
      </motion.div>
      <BatteryLevel show={show} close={handleClick} />
    </main>
  )
}
