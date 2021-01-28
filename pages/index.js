import Head from 'next/head'
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
        <title>Home - Noodles Translation - English and Native Dutch Translation</title>        
        <link rel='shortcut icon' href='/icons/favicon.ico' />
        <meta charSet='utf-8'></meta>
        <meta name='description' content='Noodles Translation provides accurate English and Dutch translation, transcription, and proofreading.'></meta>
        <meta 
          name='keywords' 
          content='Noodles, Translation, Noodles Translation, Translate Dutch to English, Translate English to Dutch, Translate Dutch, Translate English, Translate Noodles, Alex Lushiku, Lushiku, Noodles Design, Web Development, Web Design, Proofreading, Dutch Proofreading, Dutch Translator, English Translator, Transcription, Dutch Transcription'></meta>
        <meta name='author' content='Noodles Translation'></meta>
        <meta name='viewport' content='initial-scale=1.0, width=device-width'></meta>

        <meta property="og:title" content="Native Dutch and English Translation" />
        <meta property="og:image" content="https://i.postimg.cc/C5PRKRMh/Noodles-Translation.jpg" />
        <meta property="og:url" content="https://translation.alexlushiku.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Accurate English and Dutch translation, transcription, and proofreading." />
        <meta property="og:locale" content="en_US" />
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