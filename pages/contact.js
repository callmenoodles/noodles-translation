import Header from './components/Header'
import Footer from './components/Footer'

const Contact = () => {
  return(
    <div className='flex flex-col items-center'>
      <Header/>
      <div className='flex flex-col items-center justify-center mb-24' style={{'min-height':'calc(100vh - 64px - 6rem)'}}>
        <div className='flex flex-col w-144 pt-16'>
          <h1 className='text-3xl font-semibold'>Contact</h1>
          <h3 className='mb-8 mt-2'>Send me a message if you need English to Dutch or Dutch to English translation, transcription or proofreading or if you have a question.</h3>
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
              <label className='font-semibold mb-2'>Service</label>
              <select className='border focus:border-primary rounded-md p-2 pl-3 text-black text-lg' name='topic'>
                <option value='Translation'>Translation</option>
                <option value='Proofreading'>Proofreading</option>
                <option value='Transcription'>Transcription</option>
                <option value='Question'>Question</option>
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