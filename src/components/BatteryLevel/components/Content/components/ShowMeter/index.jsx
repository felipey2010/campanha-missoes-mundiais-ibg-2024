import TargetMeter from 'components/TargetMeter'

function ShowMeter({ startAnimation, percentage, startLevel }) {
  return (
    <div className='min-w-20 min-h-56 py-4'>
      <TargetMeter value={startAnimation ? percentage : startLevel} />
    </div>
  )
}

export default ShowMeter
