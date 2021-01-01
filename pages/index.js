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
      <Head>
        <title>Home - Noodles Translation - Native Dutch Translator</title>        
        <link rel='shortcut icon' href='/icons/favicon.ico' />
        <meta charSet='utf-8'></meta>
        <meta name='description' content='Do you have content which need to be translated from English to Dutch or from Dutch to English or do you need transcription or proofreading?'></meta>
        <meta 
          name='keywords' 
          content='Noodles, Translation, Translate Dutch to English, Translate English to Dutch, Translate Dutch, Translate English, Translate Noodles, Alex Lushiku, Lushiku, Noodles Design, Web Development, Web Design, Proofreading, Dutch Proofreading, Dutch Translator, English Translator, Transcription, Dutch Transcription'></meta>
        <meta name='author' content='Noodles'></meta>
        <meta name='viewport' content='initial-scale=1.0, width=device-width'></meta>
      </Head>
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