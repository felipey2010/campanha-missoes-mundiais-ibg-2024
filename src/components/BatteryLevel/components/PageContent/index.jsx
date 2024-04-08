import { useState } from 'react'
import Header from '../Header'
import Content from '../Content'
import { motion } from 'framer-motion'
import { slideInFromTop } from 'utils/Animations'

function PageContent({ close }) {
  const [startAnimation, setStartAnimation] = useState(false)

  const [initialPercentage] = useState(
    localStorage.getItem('initial_percentage') || 0
  )
  const [finalPercentage] = useState(
    localStorage.getItem('final_percentage') || 0
  )

  return (
    <motion.div
      variants={slideInFromTop}
      initial='hidden'
      animate='visible'
      exit='hidden'
      id='default-modal'
      tabIndex='-1'
      aria-hidden='true'
      className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-svh max-h-full bg-black/50'
    >
      <div className='p-4 w-full max-w-2xl max-h-full'>
        <div className='relative bg-black rounded-lg shadow border border-gray-400'>
          <Header close={close} />
          <Content
            startLevel={initialPercentage}
            endLevel={finalPercentage}
            startAnimation={startAnimation}
            setStartAnimation={setStartAnimation}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default PageContent
