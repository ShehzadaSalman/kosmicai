import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Content from '@/components/Content/Index'
import RangeSlider from '@/components/RangeSlider'
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: '400'
 })

export default function Home() {
  return (
  <main className={poppins.className}>
         <Header/>
        <Content/>
        <Footer />
  </main>
  )
}
