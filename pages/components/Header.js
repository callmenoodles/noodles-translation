import Navbar from './Navbar'

const options = ['Translation', 'Proofreading', 'Transcription']

const Header = () => {
  return(
    <div className='border-b w-11/12 h-20 flex flex-row justify-around items-center'>
      <h1 className='text-2xl font-semibold text-indigo-500'>Noodles</h1>
      <Navbar />
    </div>
  )
}

export default Header