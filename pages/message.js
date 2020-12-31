import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'

const Message = () => {
  return(
    <div className='flex flex-col items-center'>
      <Header/>
      <div className='flex flex-col justify-center items-center' style={{'min-height':'calc(100vh - 64px'}}>
        <img src='message.svg' className='w-80' />
        <h1 className='text-2xl font-semibold mt-4'>Message sent! I will get back to you soon.</h1>
        <h3 className='mt-1 text-lg'><Link href='/'><u className='text-primary font-semibold cursor-pointer'>Go back.</u></Link></h3>
      </div>
      <Footer/>
    </div>
  )
}

export default Message