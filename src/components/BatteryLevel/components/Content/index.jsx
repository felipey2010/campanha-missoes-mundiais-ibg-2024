import TargetMeter from 'components/TargetMeter'
import { useCallback, useEffect, useState } from 'react'
import { generateRandomNumber } from 'utils/RandomNumberGenerator'
import PercentageValue from './components/PercentageValue'

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
      <div className='min-w-20 min-h-56 py-4'>
        <TargetMeter value={startAnimation ? percentage : startLevel} />
      </div>
      <PercentageValue percentage={percentage} />
    </div>
  )
}

export default Content
