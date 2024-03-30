import { slideInFromRight } from 'utils/Animations'
import DrawerBody from '../DrawerBody'
import Header from '../Header'
import { motion, AnimatePresence } from 'framer-motion'

function DrawerContent({ open, handleClick }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={slideInFromRight}
          initial='hidden'
          animate='visible'
          exit='hidden'
          className='w-full z-40 bg-black/65 fixed left-0 right-0 top-0 bottom-0'
          style={{
            minHeight: 'calc(100svh - 16px)',
          }}
        >
          <div className='w-full h-full relative'>
            <div
              id='drawer-right-example'
              className='h-full absolute top-0 right-0 overflow-y-auto bg-white w-full sm:w-96 dark:bg-gray-800'
              tabIndex='-1'
              aria-labelledby='drawer-right-label'
            >
              <Header handleClick={handleClick} />
              <DrawerBody />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DrawerContent
