const getInitialPercentage = () => {
  return localStorage.getItem('initial_percentage') || 0
}

const getFinalPercentage = () => {
  return localStorage.getItem('final_percentage') || 0
}

export { getFinalPercentage, getInitialPercentage }
