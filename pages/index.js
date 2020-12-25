import Head from 'next/head'
import Image from 'next/image'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'

const Index = () => {
  return(
    <div className='h-screen'>
      <div className='flex justify-center'>
        <Header/>
      </div>
      <Home/>
      <About/>
      <div className='flex justify-center'>
        <Footer/>
      </div>
    </div>
  )
}

export default Index