import ToastifyContainer from 'components/ToastifyContainer'
import AppProvider from 'context/AppContext'
import { Poppins } from 'next/font/google'
import 'styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Missões Mundiais - IBG',
  description:
    'Alvometro de contribuição em prol de Missões Mundiais 2024 pela Igreja Batista da Graça - Roraima.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='pt-br'>
      <body
        className={`bg-black text-white relative w-full min-h-screen overflow-hidden ${poppins.className}`}
        suppressHydrationWarning={true}
        id='main__body'
      >
        <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-0 opacity-70' />
        <ToastifyContainer />
        <AppProvider>{children}</AppProvider>
        <footer className='absolute bottom-0 w-full p-6 text-center text-sm text-gray-400'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
              <p>
                © {new Date().getFullYear()} Missões Estaduais. Todos os
                direitos reservados.
              </p>
              <div className='flex gap-6'>
                {/* <Link
                  href='https://missoesmundiais.com.br/campanha2025/'
                  className='hover:text-white transition-colors'
                >
                  Sobre
                </Link> */}
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
      </body>
    </html>
  )
}
