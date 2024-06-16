import Drawer from 'components/Drawer'
import CampaignName from 'components/Logo/CampaignName'

function Navbar({ handleModal }) {
  return (
    <div className='w-full flex items-center justify-center relative'>
      <div className='w-full max-w-[1980px] flex items-center justify-between'>
        <CampaignName />
        <div className='flex items-center gap-4 h-9'>
          <Drawer />
          <button
            type='button'
            onClick={handleModal}
            className='w-16 md:w-20 font-medium flex items-center justify-center sm:w-[70px] h-full bg-primary/85 hover:bg-primary/90 text-white focus:ring-2 focus:ring-white rounded-lg text-sm px-5 py-2.5 focus:outline-none'
          >
            ALVO
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
