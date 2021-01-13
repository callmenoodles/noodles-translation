import Link from 'next/link'

const Home = () => {
  return(
    <div className='flex lg:flex-row justify-center items-center h-full max-md:w-3/5'>
      <div className='relative lg:bottom-20 smaller:bottom-10 maxmd:w-4/5 md:mr-4'>
        <h1 className='text-4xl font-bold mb-4 leading-snug'>Accurate English and Native <br className='maxmd:hidden'></br>Dutch Translation</h1>
        <p className='mb-6'>
          I will translate, transcribe and proofread any file in correct <br className='maxmd:hidden'></br>English and Dutch.</p>
        <Link href='/contact'>
          <div className='w-48 h-12 bg-primary rounded-full cursor-pointer flex justify-center items-center text-xl text-white'>
            Contact Me
          </div>
        </Link>
      </div>
      <img src='/documents.svg' alt='documents' className='relative bottom-8 smaller:hidden' style={{'width':'38%'}}/>
    </div>
  )
}

export default Home