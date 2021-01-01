import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'

const Message = () => {
  return(
    <div className='flex flex-col items-center'>
      <Head>
        <title>404 Page Not Found - Noodles Translation</title>
        <meta name='robots' content='noindex'></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header/>
      <div className='flex flex-col justify-center items-center' style={{'minHeight':'calc(100vh - 64px'}}>
        <img src='/empty.svg' className='maxsm:w-64 sm:w-80' alt='not found'/>
        <h1 className='text-2xl font-semibold mt-4'>Nothing here.</h1>
        <h3 className='mt-1 text-lg'>Want some <Link href='/'><u className='text-primary font-semibold cursor-pointer'>noodles</u></Link>?</h3>
      </div>
      <Footer/>
    </div>
  )
}

export default Message