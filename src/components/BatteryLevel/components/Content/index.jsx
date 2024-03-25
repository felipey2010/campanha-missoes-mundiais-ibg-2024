import { useCallback, useEffect, useState } from 'react'
import ShowMeter from './components/ShowMeter'
import PercentageValue from './components/PercentageValue'

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

    console.log('Increasing')

    const timer = setTimeout(() => {
      if (percentage < endLevel) {
        setPercentage((prevPercentage) => prevPercentage + 1)
        // increment()
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [percentage])

  useEffect(() => {
    if (startAnimation && percentage <= endLevel) {
      increment()
    }
  }, [startAnimation, increment])

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
