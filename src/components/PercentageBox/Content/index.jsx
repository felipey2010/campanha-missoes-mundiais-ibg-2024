import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { generateRandomNumber } from 'utils/RandomNumberGenerator'
import PercentageValueContainer from './percentage-value-container'

function Content({ startLevel = 0, endLevel = 0, startAnimation = false }) {
  const [percentage, setPercentage] = useState(parseInt(startLevel))

  const getRandomTime = useCallback(() => {
    return percentage < 0.8 * endLevel
      ? generateRandomNumber(700, 1000)
      : generateRandomNumber(1300, 2000)
  }, [endLevel, percentage])

  const increment = useCallback(() => {
    const percentValue = parseInt(percentage)
    const endValue = parseInt(endLevel)

    const timer = setTimeout(() => {
      if (percentValue < endValue) {
        if (percentage < 0.8 * endLevel) {
          setPercentage(
            (prevPercentage) =>
              parseInt(prevPercentage) + generateRandomNumber(1, 5)
          )
        } else {
          setPercentage((prevPercentage) => parseInt(prevPercentage) + 1)
        }
      }
    }, getRandomTime())

    return () => clearTimeout(timer)
  }, [percentage, endLevel, getRandomTime])

  useEffect(() => {
    const percentValue = parseInt(percentage)
    const endValue = parseInt(endLevel)

    if (startAnimation && percentValue < endValue) {
      increment()
    }
  }, [startAnimation, increment, endLevel, percentage])

  return (
    <div className='p-4 md:p-5 space-y-4 flex flex-col items-center justify-center gap-4'>
      <div className='w-full flex flex-col items-center min-w-20 min-h-56 h-full pb-4'>
        <PercentageCounter
          percentage={startAnimation ? percentage : startLevel}
        />
        <span className='h-1 w-4/5 border-b border-gray-500'></span>
        <h2 className='text-center text-5xl font-bold my-6'>
          DE ALVO ALCANÇADO
        </h2>
      </div>
    </div>
  )
}

export default Content

const PercentageCounter = ({ percentage }) => {
  function splitPercentage() {
    return String(percentage).split('').map(Number)
  }

  return (
    <div className='w-full h-full flex items-center justify-center gap-4 text-6xl font-bold p-4 text-center'>
      {splitPercentage().map((value, index) => (
        <PercentageValueContainer key={index} value={value} />
      ))}
      <PercentageValueContainer value='%' />
    </div>
  )
}
