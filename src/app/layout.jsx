import ToastifyContainer from 'components/ToastifyContainer'
import AppProvider from 'context/AppContext'
import { Poppins } from 'next/font/google'
import 'styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Missões Estaduais - IBG',
  description:
    'Alvometro de contribuição em prol de Missões Estaduais 2024 pela Igreja Batista da Graça - Roraima.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='pt-br'>
      <body
        className={`bg-black ${poppins.className}`}
        suppressHydrationWarning={true}
        id='main__body'
      >
        <ToastifyContainer />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
