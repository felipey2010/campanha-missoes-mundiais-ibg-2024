import { useState } from 'react'
import Header from '../Header'
import Content from '../Content'

function PageContent({ close }) {
  const [startAnimation, setStartAnimation] = useState(false)

  const [initialPercentage] = useState(
    localStorage.getItem('initial_percentage') || 0
  )
  const [finalPercentage] = useState(
    localStorage.getItem('final_percentage') || 0
  )

  return (
    <div
      id='default-modal'
      tabIndex='-1'
      aria-hidden='true'
      className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-svh max-h-full bg-black/50'
    >
      <div className='p-4 w-full max-w-2xl max-h-full'>
        <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          <Header close={close} />
          <Content
            startLevel={initialPercentage}
            endLevel={finalPercentage}
            startAnimation={startAnimation}
            setStartAnimation={setStartAnimation}
          />
        </div>
      </div>
    </div>
  )
}

export default PageContent
