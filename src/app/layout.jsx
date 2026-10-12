import Footer from 'components/Footer'
import ToastifyContainer from 'components/ToastifyContainer'
import { CAMPAIGN_NAME } from 'constants/data'
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
  title: `${CAMPAIGN_NAME} - IBG`,
  description: `Alvometro de contribuição em prol de ${CAMPAIGN_NAME} 2026 pela Igreja Batista da Graça - Roraima.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang='pt-br'>
      <body
        className={`relative flex min-h-svh w-full flex-col overflow-x-hidden bg-black text-white ${poppins.className}`}
        suppressHydrationWarning={true}
        id='main__body'
      >
        <div className='pointer-events-none fixed inset-0 z-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-70' />
        <ToastifyContainer />
        <AppProvider>{children}</AppProvider>
        <Footer />
      </body>
    </html>
  )
}
