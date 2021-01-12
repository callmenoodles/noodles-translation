import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

const Translation = () => {
  return(
    <div className='flex flex-col items-center'>
      <Head>
        <title>Translation - Noodles Translation</title>
        <link rel='shortcut icon' href='/icons/favicon.ico' />
        <meta charSet='utf-8'></meta>
        <meta name='description' content='There are many types of translation but here is a brief overview of the services I provide'></meta>
        <meta 
          name='keywords' 
          content='Noodles, Translation, Translate Dutch to English, Translate English to Dutch, Translate Dutch, Translate English, Translate Noodles, Alex Lushiku, Lushiku, Noodles Design, Web Development, Web Design, Dutch Translator, English Translator'></meta>
        <meta name='author' content='Noodles'></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:title" content="Native Dutch and English Translation" />
        <meta property="og:image" content="https://i.postimg.cc/C5PRKRMh/Noodles-Translation.jpg" />
        <meta property="og:url" content="https://translation.alexlushiku.com/services/translation" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="I will translate anything from English to Dutch or vice versa" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Header/>

      <div className='flex flex-col w-144 pt-20 mb-32 maxmd:w-4/5 md:w-144' style={{'minHeight':'calc(100vh - 64px'}}>
        <h1 className='text-3xl font-bold mt-12 text-primary'>Translation</h1>
        <p className='text-lg'>There are many types of translation but here is a brief overview of the services I provide:</p>
        <img 
          src='/translation.svg'
          alt='translation'
          className='transform scale-75'/>
        <h3 className='text-2xl font-semibold text-primary mt-4'>General translation</h3>
        <p>
          As the name suggests, general translation covers all types of translation such as words, sentences, documents, or paragraphs. Choose this if your content does not fit in the following categories.
        </p>
        <h3 className='text-2xl font-semibold text-primary mt-4'>Technical translation</h3>
        <p>
          Technical translation involves the translation of technical documents, manuals, and other documents in a technical industry such as engineering and (computer) science. Because of my background as a developer, I offer any IT-related translation.
        </p>
        <h3 className='text-2xl font-semibold text-primary mt-4'>Software localization</h3>
        <p>
          Software localization involves translating the user interface of software or games.
        </p>
        <h3 className='text-2xl font-semibold text-primary mt-4'>Website translation</h3>
        <p>
          Website translation involves translating a website’s content, currency, date and address formats and layout such that it appeals to the target user.
        </p>
      </div>
      <Footer/>
    </div>
  )
}

export default Translation