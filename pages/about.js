import Link from 'next/link'
import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'

// TODO: Update portfolio site link

const About = () => {
  return(
    <div className='flex flex-col'>
      <Head>
        <title>About - Noodles Translation</title>
        <link rel='shortcut icon' href='/icons/favicon.ico' />
        <meta charSet='utf-8'></meta>
        <meta name='description' content='Noodles Translation stands for helping businesses with their online presence.'></meta>
        <meta 
          name='keywords' 
          content='Noodles, Translation, Noodles Translation, Translate Dutch to English, Translate English to Dutch, Translate Dutch, Translate English, Translate Noodles, Alex Lushiku, Lushiku, Noodles Design, Web Development, Web Design, Proofreading, Dutch Proofreading, Dutch Translator, English Translator, Transcription, Dutch Transcription, Computer Science, Student'></meta>
        <meta name='author' content='Noodles Translation'></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:title" content="About" />
        <meta property="og:image" content="https://i.postimg.cc/C5PRKRMh/Noodles-Translation.jpg" />
        <meta property="og:url" content="https://translation.noodles.services/about" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="What is Noodles Translation?" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <div className='flex justify-center'>
        <Header/>
      </div>
      
      <div className='flex flex-col justify-center mb-24 items-start' style={{'minHeight':'calc(100vh - 64px'}}>   
        <div className='flex flex-row justify-center items-center w-full'>     
          <div className='maxmd:w-4/5 md:w-144 mt-28'>
            <h1 className='text-3xl font-bold mt-12 text-primary'>What is Noodles Translation?</h1>
            <p className='mt-4 text-lg'>
              Noodles Translation stands for helping businesses with their online presence. Technology is becoming more and more ubiquitous, so your business simply cannot stay behind. The total amount of active internet users has surpassed half the world population and these users consist of people from different countries who may or may not speak English well enough to understand your business. I will help you with your online presence with a great website and accurate English and Dutch translation.
            </p>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center w-full my-8'>
          <img src='/website.svg' alt='website' className='maxsm:w-80 sm:w-96'/>
        </div>
        <div className='flex flex-row justify-center items-center w-full'>
          <div className='maxmd:w-4/5 md:w-144'>
            <h1 className='text-3xl font-bold mt-12 text-primary'>Who is behind Noodles Translation?</h1>
            <p className='mt-4 text-lg'>
              I go by Noodles, and I am a Dutch computer science student. The software industry is dominated by the English language as well as many other industries. Therefore, English is my preferred language for nearly all tasks. I perfected my English skills by following the Cambridge English: Advanced (CAE) course from which I have graduated so I can help people like you.
              <br></br><br></br>
              Other than that, I like programming websites, mobile applications, and games. Have a look at my projects on my <Link href='https://noodles.services/'><a className='cursor-pointer text-primary'>portfolio website</a></Link>! 
            </p>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center w-full my-12'>
          <img src='/programming.svg' alt='programming' className='maxsm:w-80 sm:w-96'/>
        </div>
      </div>
      <div className='flex justify-center'>
        <Footer/>
      </div>
    </div>
  )
}

export default About