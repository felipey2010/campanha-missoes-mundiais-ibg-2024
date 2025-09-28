import Footer from 'components/Footer'
import ToastifyContainer from 'components/ToastifyContainer'
import AppProvider from 'context/AppContext'
import { Poppins } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css'
import 'styles/globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Missões Nacionais - IBG',
  description:
    'Alvometro de contribuição em prol de Missões Nacionais 2025 pela Igreja Batista da Graça - Roraima.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='pt-br'>
      <body
        className={`bg-black text-white relative w-full min-h-screen ${poppins.className}`}
        suppressHydrationWarning={true}
        id='main__body'
      >
        <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-0 opacity-70' />
        <ToastifyContainer />
        <AppProvider>{children}</AppProvider>
        <Footer />
      </body>
    </html>
  )
}
