import { AnimatePresence } from 'framer-motion'
import Content from './component/Content'

function DrawerContent({ open, handleClick }) {
  return (
    <AnimatePresence>
      {open && <Content handleClick={handleClick} />}
    </AnimatePresence>
  )
}

export default DrawerContent
