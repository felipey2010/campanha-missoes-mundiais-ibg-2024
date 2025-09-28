import PageContent from './PageContent'
import { AnimatePresence } from 'framer-motion'

const PercentageBox = ({ show, close }) => {
  return (
    <AnimatePresence>{show && <PageContent close={close} />}</AnimatePresence>
  )
}

export default PercentageBox
