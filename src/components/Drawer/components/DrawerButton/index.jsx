import { Tooltip } from 'flowbite-react'
import { IoSettings } from 'react-icons/io5'

function DrawerButton({ handleClick }) {
  return (
    <Tooltip content='Configuração'>
      <button
        type='button'
        onClick={handleClick}
        aria-label='configuração'
        className='flex items-center justify-center'
      >
        <IoSettings className='w-7 h-7 md:w-9 md:h-9 text-white/75 hover:text-white' />
      </button>
    </Tooltip>
  )
}

export default DrawerButton
