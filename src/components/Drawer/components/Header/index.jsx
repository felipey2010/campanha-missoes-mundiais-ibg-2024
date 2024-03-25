import { MdClose } from 'react-icons/md'

function Header({ handleClick }) {
  return (
    <div className='flex items-center justify-between p-4 md:p-5 rounded-t border-b border-slate-200'>
      <h5
        id='drawer-right-label'
        className='text-base font-semibold text-gray-500 dark:text-gray-400'
      >
        Configuração do alvometro
      </h5>
      <button
        type='button'
        onClick={handleClick}
        data-drawer-hide='drawer-right-example'
        aria-controls='drawer-right-example'
        className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white'
      >
        <MdClose size={14} />
        <span className='sr-only'>Fechar menu</span>
      </button>
    </div>
  )
}

export default Header
