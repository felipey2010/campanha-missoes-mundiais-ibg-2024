import { useCallback, useEffect, useState } from 'react'
import ShowMeter from './components/ShowMeter'
import PercentageValue from './components/PercentageValue'
import { generateRandomNumber } from 'utils/RandomNumberGenerator'

function Content({
  startLevel = 0,
  endLevel = 0,
  startAnimation = false,
  setStartAnimation,
}) {
  const [percentage, setPercentage] = useState(startLevel)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation((prev) => !prev)
    }, 5000)

    return () => clearTimeout(timer)
  }, [startLevel])

  const increment = useCallback(() => {
    if (percentage >= endLevel) return

    const timer = setTimeout(() => {
      if (percentage < endLevel) {
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
  }, [percentage])

  useEffect(() => {
    if (startAnimation && percentage <= endLevel) {
      increment()
    }
  }, [startAnimation, increment])

  const getRandomTime = () => {
    if (percentage < 0.8 * endLevel) {
      return generateRandomNumber(700, 1000)
    } else {
      return generateRandomNumber(1500, 2000)
    }
  }

  return (
    <div className='p-4 md:p-5 space-y-4 flex flex-col items-center justify-center'>
      <ShowMeter
        startAnimation={startAnimation}
        startLevel={startLevel}
        percentage={percentage}
      />
      <PercentageValue percentage={percentage} />
    </div>
  )
}

export default Content
