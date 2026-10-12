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
        <IoSettings className='h-7 w-7 text-white/75 hover:text-white md:h-9 md:w-9' />
      </button>
    </Tooltip>
  )
}

export default DrawerButton
