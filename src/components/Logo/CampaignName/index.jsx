import { CAMPAIGN_NAME } from 'constants/data'

function CampaignName() {
  const nameParts = CAMPAIGN_NAME.split(' ')

  return (
    <div className='flex items-center gap-2 text-xl sm:text-2xl md:text-4xl font-bold'>
      <span className='text-white uppercase'>{nameParts[0]}</span>{' '}
      <span className='text-primary uppercase'>{nameParts[1]}</span>
    </div>
  )
}

export default CampaignName
