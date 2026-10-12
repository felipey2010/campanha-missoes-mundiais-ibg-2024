import { motion } from 'framer-motion'
import { fadeInUp } from 'utils/Animations'

type Props = {
  value: string | number
}

function PercentageValueContainer({ value }: Props) {
  return (
    <motion.div
      variants={fadeInUp}
      initial='initial'
      animate='animate'
      exit='exit'
      className='flex min-h-20 min-w-0 max-w-[180px] flex-1 items-center justify-center rounded-md bg-white/65 p-1 sm:min-h-28 sm:p-3 md:min-h-[150px] md:p-4'
    >
      <motion.p>{value}</motion.p>
    </motion.div>
  )
}

export default PercentageValueContainer
