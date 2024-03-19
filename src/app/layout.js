import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
})

export const metadata = {
  title: "Missões Mundiais - IBG",
  description: "Alvometro de contribuição em prol de Missões Mundiais pela Igreja Batista da Graça - Roraima.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
