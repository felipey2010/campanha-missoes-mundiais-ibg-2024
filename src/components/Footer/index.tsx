import Link from 'next/link'

function Footer() {
  return (
    <footer className='absolute bottom-0 w-full p-6 text-center text-sm text-gray-400'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <p>
            © {new Date().getFullYear()} Missões Nacionais. Todos os direitos
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
