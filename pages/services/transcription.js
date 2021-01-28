import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

const Transcription = () => {
  return(
    <div className='flex flex-col items-center'>
      <Head>
        <title>Transcription - Noodles Translation</title>
        <link rel='shortcut icon' href='/icons/favicon.ico' />
        <meta charSet='utf-8'></meta>
        <meta name='description' content='Transcription is the process of making a written copy from other representations of language.'></meta>
        <meta 
          name='keywords' 
          content='Noodles, Translation, Noodles Translation, Translate Dutch to English, Translate English to Dutch, Translate Dutch, Translate English, Translate Noodles, Alex Lushiku, Lushiku, Noodles Design, Web Development, Web Design, Proofreading, Dutch Proofreading, Dutch Translator, English Translator, Transcription, Dutch Transcription'></meta>
        <meta name='author' content='Noodles Translation'></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:title" content="Native Dutch and English Transcription Service" />
        <meta property="og:image" content="https://i.postimg.cc/C5PRKRMh/Noodles-Translation.jpg" />
        <meta property="og:url" content="https://translation.alexlushiku.com/services/transcription" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="I will transcribe Dutch and English audio." />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Header/>
      <div className='flex flex-col w-144 pt-32 mb-32 maxmd:w-4/5 md:w-144' style={{'minHeight':'calc(100vh - 64px'}}>
        <h1 className='text-3xl font-bold text-primary mt-4'>What is transcription?</h1>
        <p className='text-lg mt-2'>
          Transcription is the process of making a written copy from other representations of language. It usually means converting speech to text, but it can also be applied to sign language for instance. Take note that transcribed text is in the same language as the source language.
        </p>
        <img 
          src='/transcription.svg'
          alt='transcription'
          className='transform scale-75'/>
        <h1 className='text-3xl font-bold text-primary mt-12'>Types of transcription</h1>
        <h2 className='text-2xl font-semibold mt-4'>Verbatim transcription</h2>
        <p className='text-lg mt-2'>
          Verbatim transciption is a transcription method where every detail is captured, including fillers, stutters, and even non-speech sounds like a ringing doorbell. This type of translation requires a lot of attention to detail and therefore takes more time to complete.
        </p>

        <h2 className='text-2xl font-semibold mt-4'>Non-verbatim transcription</h2>
        <p className='text-lg mt-2'>
          Non-verbatim or clean transcription is a transcription method meant for professional use. It removes the details mentioned above, including curse words, to make the transcription user-friendly.
        </p>
        <h1 className='text-3xl font-bold text-primary mt-12'>Why Noodles Translation?</h1>
        <p className='text-lg mt-2'>
          I am a native Dutch speaker. This is very important for understanding informal language such as slang and spoken language, which a non-native will likely not grasp. Furthermore, I do a lot of work in English making me qualified for understanding English idioms and informal language too.
        </p>
      </div>
      <Footer/>
    </div>
  )
}

export default Transcription