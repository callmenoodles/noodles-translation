import Link from 'next/link'

const Home = () => {
  return(
    <div className='flex flex-row justify-center items-center h-full'>
      <div className='relative bottom-20'>
        <h1 className='text-4xl font-bold mb-4 leading-snug'>Accurate English and Dutch <br></br>Translation</h1>
        <p className='mb-6'>
          Do you need anything translated from English to Dutch <br></br>or from Dutch to English?</p>
        <Link href='/contact'>
          <div className='w-48 h-12 bg-primary rounded-full cursor-pointer flex justify-center items-center text-xl text-white'>
            Contact Me
          </div>
        </Link>
      </div>
      <img src='/documents.svg' className='relative bottom-8' style={{'width':'40%'}}/>
    </div>
  )
}

export default Home