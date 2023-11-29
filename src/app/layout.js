
import { Inter,Poppins,Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Projects from '@/components/projects/Projects'
import Contacts from '@/components/contact/contacts'
import Footer from '@/components/footer/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-slate-200'>
        <Navbar />

        {children}
        <Projects/>
        <Contacts/>
        <Footer/>
        </body>
      
    </html>
  )
}
