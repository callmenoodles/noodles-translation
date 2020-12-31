import Link from 'next/link'
import Navbar from './Navbar'

const options = ['Translation', 'Proofreading', 'Transcription']

const Header = () => {
  return(
    <div className='absolute border-b w-11/12 h-20 flex flex-row justify-around items-center'>
      <Link href='/'>
        <div className='flex flex-row items-center cursor-pointer'>
          <img src='/noodles.png' className='mr-3 mt-1' style={{'max-height':'25px'}}/>
          <h1 className='text-2xl font-semibold'>Noodles</h1>
        </div>
      </Link>
      <Navbar />
    </div>
  )
}

export default Header