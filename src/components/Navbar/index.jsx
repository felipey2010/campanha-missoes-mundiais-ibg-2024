import Drawer from 'components/Drawer'
import { Button } from 'flowbite-react'

function Navbar({ handleModal }) {
  return (
    <div className='w-full flex items-center justify-center relative'>
      <div className='w-full max-w-[1980px] flex items-center justify-between'>
        <div className='flex items-center gap-2 text-2xl font-bold'>
          MISSÕES <span className='text-[#3f83f8]'>MUNDIAIS</span>
        </div>
        <div className='flex items-center gap-4'>
          <Drawer />
          <Button
            type='button'
            onClick={handleModal}
            className='bg-[#3f83f8] hover:!bg-[#3b70c9]'
          >
            ALVO
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
