'use client'
import BatteryLevel from 'components/BatteryLevel'
import Navbar from 'components/Navbar'
import { BG_01, IMG_TEMA } from 'images'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow((prev) => !prev)
  }

  return (
    <main className='w-full h-full flex justify-center relative'>
      <div className='w-full h-full flex flex-col items-center gap-11 md:w-3/5 p-4'>
        <Navbar handleModal={handleClick} />
        <div className='w-full h-full text-center flex flex-col items-center gap-11'>
          <Image
            width={400}
            height={300}
            src={IMG_TEMA}
            alt='no poder do espírito, vamos completar a missão'
            priority
          />
          <div className='w-full flex flex-col gap-4 bg-black'>
            <span className='text-2xl tracking-normal text-justify'>
              Mas receberão poder quando o Espírito Santo descer sobre vocês, e
              serão minhas testemunhas em Jerusalém, em toda a Judéia e Samaria,
              e até os confins da terra".
            </span>
            <span className='text-lg'>Atos 1:8</span>
          </div>
        </div>
      </div>
      <Image
        width={1000}
        height={1000}
        src={BG_01}
        alt='imagem de grupo de pessoas'
        className='absolute bottom-0 left-1/2 -translate-x-1/2 bg-transparent'
        style={{ zIndex: -1 }}
        priority
      />
      <BatteryLevel show={show} close={handleClick} />
    </main>
  )
}
