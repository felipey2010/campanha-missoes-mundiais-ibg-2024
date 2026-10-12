import { CAMPAIGN_NAME } from 'constants/data'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='relative mt-auto w-full px-4 py-4 text-center text-xs text-gray-400 sm:px-6 sm:py-5 sm:text-sm'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col items-center justify-between gap-2 md:flex-row md:gap-4'>
          <p>
            © {new Date().getFullYear()} {CAMPAIGN_NAME}. Todos os direitos
            reservados. IBG Mídia
          </p>
          <div className='flex gap-6'>
            <Link
              href='https://www.instagram.com/ibg.oficial/'
              className='hover:text-white transition-colors'
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
