import { Tooltip } from 'flowbite-react'
import { IoSettings } from 'react-icons/io5'

function DrawerButton({ handleClick }) {
  return (
    <Tooltip content='Configuração'>
      <button type='button' onClick={handleClick} aria-label='configuração'>
        <IoSettings size={32} className='text-white/75 hover:text-white' />
      </button>
    </Tooltip>
  )
}

export default DrawerButton
