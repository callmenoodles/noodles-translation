import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'

const Message = () => {
  return(
    <div className='flex flex-col items-center'>
      <Header/>
      <div className='flex flex-col justify-center items-center' style={{'min-height':'calc(100vh - 64px'}}>
        <img src='empty.svg' className='w-80' />
        <h1 className='text-2xl font-semibold mt-4'>Nothing here.</h1>
        <h3 className='mt-1 text-lg'>Want some <Link href='/'><u className='text-primary font-semibold cursor-pointer'>noodles</u></Link>?</h3>
      </div>
      <Footer/>
    </div>
  )
}

export default Message