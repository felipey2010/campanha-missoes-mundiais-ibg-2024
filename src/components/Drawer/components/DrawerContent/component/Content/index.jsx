import { motion } from 'framer-motion'
import { slideInFromRight } from 'utils/Animations'
import { useEffect, useRef } from 'react'
import Header from 'components/Drawer/components/Header'
import DrawerBody from 'components/Drawer/components/DrawerBody'

function Content({ handleClick }) {
  const drawerRef = useRef()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        handleClick()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <motion.div
      variants={slideInFromRight}
      initial='hidden'
      animate='visible'
      exit='hidden'
      className='w-full z-40 bg-black/65 fixed left-0 right-0 top-0 bottom-0 min-h-[calc(100svh-16px)]'
    >
      <div className='w-full h-full relative'>
        <div
          ref={drawerRef}
          id='drawer-right-example'
          className='h-full absolute top-0 right-0 overflow-y-auto bg-gray-900 w-full sm:w-96'
          tabIndex='-1'
          aria-labelledby='drawer-right-label'
        >
          <Header handleClick={handleClick} />
          <DrawerBody />
        </div>
      </div>
    </motion.div>
  )
}

export default Content
