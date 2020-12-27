import Head from 'next/head'
import Image from 'next/image'
import Header from './components/Header'
import Home from './components/home/Home'
import About from './components/home/About'
import Why from './components/home/Why'
import Services from './components/home/Services'
import Contact from './components/home/Contact'
import Footer from './components/Footer'

const Index = () => {
  return(
    <div className='h-screen'>
      <div className='flex justify-center'>
        <Header/>
      </div>
      <Home/>
      <About/>
      <Why/>
      <Services/>
      <Contact/>
      <div className='flex justify-center'>
        <Footer/>
      </div>
    </div>
  )
}

export default Index