import Header from './components/Header'
import Footer from './components/Footer'

const Contact = () => {
  return(
    <div className='h-screen flex flex-col items-center'>
      <Header/>
      <div className='m-12 w-144'>
        <h1 className='mb-4 text-3xl font-semibold'>Contact</h1>
        <form action='/contact' method='post'>
          <div className='flex flex-col mb-4'>
            <label className='font-semibold mb-2'>Name</label>
            <input className='border p-2 text-black text-lg' />
          </div>
          <div className='flex flex-col mb-4'>
            <label className='font-semibold mb-2'>Email</label>
            <input className='border p-2 text-black text-lg' type='email' />
          </div>
          <div className='flex flex-col mb-4'>
            <label className='font-semibold mb-2'>Topic</label>
            <select className='border p-2 text-black text-lg'>
              <option value='Translation'>Translation</option>
              <option value='Proofreading'>Proofreading</option>
              <option value='Transcription'>Transcription</option>
              <option value='Other'>Other</option>
            </select>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='font-semibold mb-2'>Message</label>
            <textarea className='border p-2 text-black text-lg'></textarea>
          </div>
          <button className='flex flex-col mb-4 bg-green-500 w-full p-2 text-white'>
            Send
          </button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact