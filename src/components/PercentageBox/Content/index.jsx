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
    <div className='flex flex-col items-center justify-center gap-3 p-3 sm:gap-4 sm:p-4 md:p-5'>
      <div className='flex h-full min-h-44 w-full min-w-0 flex-col items-center pb-3 sm:min-h-56 sm:pb-4'>
        <PercentageCounter
          percentage={startAnimation ? percentage : startLevel}
        />
        <span className='h-1 w-4/5 border-b border-gray-500'></span>
        <h2 className='my-4 text-center text-2xl font-bold leading-tight sm:my-6 sm:text-4xl md:text-5xl'>
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
    <div className='flex h-full w-full items-center justify-center gap-1 p-1 text-center text-[clamp(1.75rem,10vw,3.75rem)] font-bold sm:gap-2 sm:p-3 md:gap-4 md:p-4'>
      {splitPercentage().map((value, index) => (
        <PercentageValueContainer key={index} value={value} />
      ))}
      <PercentageValueContainer value='%' />
    </div>
  )
}
