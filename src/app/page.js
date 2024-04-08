'use client'
import BatteryLevel from 'components/BatteryLevel'
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
            <Image
              width={400}
              height={300}
              src={IMG_TEMA}
              alt='no poder do espírito, vamos completar a missão'
              priority
            />
          </motion.div>
          <motion.div
            variants={fadeOpacity_2}
            initial='initial'
            animate='animate'
            custom={5}
            className='w-full flex flex-col gap-4 text-white bg-black'
          >
            <span className='text-2xl tracking-normal text-justify'>
              Mas receberão poder quando o Espírito Santo descer sobre vocês, e
              serão minhas testemunhas em Jerusalém, em toda a Judéia e Samaria,
              e até os confins da terra&quot;.
            </span>
            <span className='text-lg'>Atos 1:8</span>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={fadeOpacity_2}
        initial='initial'
        animate='animate'
        custom={8}
        className='absolute bottom-0 left-0 right-0 bg-transparent flex items-center justify-center'
        style={{ zIndex: -1 }}
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
