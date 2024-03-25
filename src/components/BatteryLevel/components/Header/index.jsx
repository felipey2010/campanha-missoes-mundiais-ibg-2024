function Header({ close }) {
  return (
    <div className='flex items-center justify-between p-4 md:p-5 rounded-t'>
      <h3 className='w-1 text-xl font-semibold text-gray-900 dark:text-white'></h3>
      <button
        type='button'
        onClick={close}
        className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
        data-modal-hide='default-modal'
      >
        <svg
          className='w-3 h-3'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 14 14'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
          />
        </svg>
        <span className='sr-only'>Fechar alvometro</span>
      </button>
    </div>
  )
}

export default Header
