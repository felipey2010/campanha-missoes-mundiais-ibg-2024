import { CAMPAIGN_NAME } from 'constants/data'

function CampaignName() {
  const nameParts = CAMPAIGN_NAME.split(' ')

  return (
    <div className='flex min-w-0 items-center gap-2 text-base font-bold leading-tight min-[360px]:text-lg sm:text-2xl md:text-3xl lg:text-4xl'>
      <span className='text-white uppercase'>{nameParts[0]}</span>{' '}
      <span className='text-primary uppercase'>{nameParts[1]}</span>
    </div>
  )
}

export default CampaignName
