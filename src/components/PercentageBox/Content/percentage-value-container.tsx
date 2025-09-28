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
      className='w-full max-w-[180px] min-h-[150px] flex items-center justify-center p-4 bg-white/65 rounded-md m-1'
    >
      <motion.p>{value}</motion.p>
    </motion.div>
  )
}

export default PercentageValueContainer
