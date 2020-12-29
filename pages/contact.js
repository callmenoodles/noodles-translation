import Header from './components/Header'
import Footer from './components/Footer'

const Contact = () => {
  return(
    <div className='flex flex-col items-center'>
      <Header/>
      <div className='flex flex-col items-center justify-center mb-24' style={{'min-height':'calc(100vh - 64px - 6rem)'}}>
        <div className='flex flex-col w-144'>
          <h1 className='mb-4 text-3xl font-semibold'>Contact</h1>
          <form action='/api/message' method='post'>
            <div className='flex flex-col mb-4'>
              <label className='font-semibold mb-2'>Name</label>
              <input className='border focus:border-primary rounded-md p-2 pl-3 text-black text-lg' name='name'/>
            </div>
            <div className='flex flex-col mb-4'>
              <label className='font-semibold mb-2'>Email</label>
              <input className='border focus:border-primary rounded-md p-2 pl-3 text-black text-lg' type='email' name='email' />
            </div>
            <div className='flex flex-col mb-4'>
              <label className='font-semibold mb-2'>Topic</label>
              <select className='border focus:border-primary rounded-md p-2 pl-3 text-black text-lg' name='topic'>
                <option value='Translation'>Translation</option>
                <option value='Proofreading'>Proofreading</option>
                <option value='Transcription'>Transcription</option>
                <option value='Other'>Other</option>
              </select>
            </div>
            <div className='flex flex-col mb-4'>
              <label className='font-semibold mb-2'>Message</label>
              <textarea className='border focus:border-primary rounded-md p-2 pl-3 text-black text-lg' name='message'></textarea>
            </div>
            <button className='flex flex-col mb-4 bg-green-500 w-full rounded-md p-2 text-white'>
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact