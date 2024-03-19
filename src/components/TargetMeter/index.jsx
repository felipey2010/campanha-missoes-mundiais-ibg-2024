import Thermometer from 'react-thermometer-component'

function TargetMeter() {
  return (
    <div>
      <Thermometer
        theme='light'
        value='10'
        max='100'
        steps='1'
        format='°C'
        size='normal'
        height='180'
      />
    </div>
  )
}

export default TargetMeter
