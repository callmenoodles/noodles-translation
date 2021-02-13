import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Proofreading = () => {
  return(
    <div className='flex flex-col items-center'>
      <Head>
        <title>Proofreading - Noodles Translation</title>
        <link rel='shortcut icon' href='/icons/favicon.ico' />
        <meta charSet='utf-8'></meta>
        <meta name='description' content='Proofreading is the process of reviewing content for errors in spelling, grammar, punctuation, and structure.'></meta>
        <meta 
          name='keywords' 
          content='Noodles, Translation, Noodles Translation, Translate Dutch to English, Translate English to Dutch, Translate Dutch, Translate English, Translate Noodles, Alex Lushiku, Lushiku, Noodles Design, Web Development, Web Design, Proofreading, Dutch Proofreading, Dutch Translator, English Translator, Transcription, Dutch Transcription'></meta>
        <meta name='author' content='Noodles Translation'></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:title" content="Native Dutch and English Proofreading Service" />
        <meta property="og:image" content="https://i.postimg.cc/C5PRKRMh/Noodles-Translation.jpg" />
        <meta property="og:url" content="https://translation.noodles.services/services/proofreading" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="I will proofread Dutch and English content." />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Header/>
      
      <div className='flex flex-col pt-32 mb-32 maxmd:w-4/5 md:w-144' style={{'minHeight':'calc(100vh - 64px'}}>
        <h1 className='text-3xl font-bold text-primary mt-4'>What is proofreading?</h1>
        <p className='text-lg mt-2'>
          Proofreading is the process of reviewing content for errors in spelling, grammar, punctuation, and structure. Incorrect spelling looks unprofessional and will hurt your brand, but proofreading also ensures the correct message is conveyed. This involves actively reading context to make sure the structure is correct as opposed to correcting word for word.
        </p>
        <img 
          src='/proofreading.svg'
          alt='proofreading'
          className='transform scale-75'/>
        <h1 className='text-3xl font-bold text-primary mt-12'>Why is proofreading important?</h1>
        <p className='text-lg mt-2'>
          It is important that your content is accurately translated to the target language. As stated earlier, spelling or grammar mistakes look unprofessional and will distract your readers. You want your readers to remember the content, not its mistakes. Some people decide to skip proofreading but if you produce a lot of content, this will indefinitely result in mistakes sooner or later.
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

export default Proofreading