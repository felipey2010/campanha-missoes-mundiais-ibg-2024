const getInitialPercentage = () => {
  return typeof window !== 'undefined'
    ? localStorage.getItem('initial_percentage') || 0
    : 0
}

const getFinalPercentage = () => {
  return typeof window !== 'undefined'
    ? localStorage.getItem('final_percentage') || 0
    : 0
}

export { getFinalPercentage, getInitialPercentage }
