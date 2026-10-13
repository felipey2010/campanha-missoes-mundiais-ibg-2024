import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { slideInFromTop } from 'utils/Animations'
import { getStoredCampaignValues } from 'utils/getInitialValues'
import Content from '../Content'
import Header from '../Header'

const WAIT_TIME_TO_START_COUNT = 4000

function PageContent({ close }) {
  const [startAnimation, setStartAnimation] = useState(false)
  const [campaignValues] = useState(getStoredCampaignValues)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true)
    }, WAIT_TIME_TO_START_COUNT)

    return () => clearTimeout(timer)
    /* eslint-disable-next-line padded-blocks */
  }, [])

  return (
    <motion.div
      variants={slideInFromTop}
      initial='hidden'
      animate='visible'
      exit='hidden'
      id='default-modal'
      tabIndex='-1'
      aria-hidden='true'
      className='fixed inset-0 z-50 flex h-svh w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50'
    >
      <div className='max-h-full w-full p-3 sm:p-4 md:max-w-xl lg:max-w-3xl'>
        <div className='relative bg-black rounded-lg shadow border border-gray-400'>
          <Header close={close} />
          <Content
            startLevel={campaignValues.initial_percentage}
            endLevel={campaignValues.final_percentage}
            campaignTarget={campaignValues.campaign_target}
            currentAmount={campaignValues.current_amount}
            startAnimation={startAnimation}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default PageContent
