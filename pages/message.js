import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'

const Message = () => {
  return(
    <div className='flex flex-col items-center'>
      <Head>
        <title>Message Confirmation - Noodles Translation</title>
        <link rel='shortcut icon' href='/icons/favicon.ico' />
        <meta charSet='utf-8'></meta>
        <meta name='robots' content='noindex'></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header/>
      <div className='flex flex-col justify-center items-center' style={{'minHeight':'calc(100vh - 64px'}}>
        <img src='message.svg' alt='message sent' className='maxsm:w-48 sm:w-64' />
        <h1 className='text-2xl font-semibold mt-4 maxsm:w-4/5 text-center'>Message sent! I will get back to you soon.</h1>
        <h3 className='mt-1 text-lg'><Link href='/'><u className='text-primary font-semibold cursor-pointer'>Go back.</u></Link></h3>
      </div>
      <Footer/>
    </div>
  )
}

export default Message