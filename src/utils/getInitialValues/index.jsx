import { useEffect, useState } from 'react'

const getInitialPercentage = () => {
  const [initialPercentage, setInitialPercentage] = useState(0)

  useEffect(() => {
    const storedValue = localStorage.getItem('initial_percentage')
    setInitialPercentage(storedValue ? parseInt(storedValue) : 0)
  }, [])

  return initialPercentage
}

const getFinalPercentage = () => {
  const [finalPercentage, setFinalPercentage] = useState(0)

  useEffect(() => {
    const storedValue = localStorage.getItem('final_percentage')
    setFinalPercentage(storedValue ? parseInt(storedValue) : 0)
  }, [])
  return finalPercentage
}

export { getInitialPercentage, getFinalPercentage }
