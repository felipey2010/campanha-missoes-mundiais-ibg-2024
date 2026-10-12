import Drawer from 'components/Drawer'
import CampaignName from 'components/Logo/CampaignName'

function Navbar({ handleModal }) {
  return (
    <div className='w-full flex items-center justify-center relative'>
      <div className='flex w-full max-w-[1980px] items-center justify-between gap-3'>
        <CampaignName />
        <div className='flex h-8 shrink-0 items-center gap-2 sm:h-9 sm:gap-4'>
          <Drawer />
          <button
            type='button'
            onClick={handleModal}
            className='flex h-full w-14 items-center justify-center rounded-lg bg-primary/85 px-3 text-xs font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-white sm:w-[70px] sm:px-4 sm:text-sm md:w-20'
          >
            ALVO
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
