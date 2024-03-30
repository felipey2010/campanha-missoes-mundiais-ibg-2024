import PageContent from './components/PageContent'
import { AnimatePresence } from 'framer-motion'

const BatteryLevel = ({ show, close }) => {
  return (
    <AnimatePresence>{show && <PageContent close={close} />}</AnimatePresence>
  )
}

export default BatteryLevel
