import Thermometer from 'react-thermometer-component'

function TargetMeter({ value }) {
  return (
    <Thermometer
      theme='light'
      value={value}
      max='100'
      steps='1'
      format='%'
      size='large'
      height='350'
    />
  )
}

export default TargetMeter
