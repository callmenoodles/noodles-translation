import Service from './Service'

const Services = () => {
  return(
    <div className='flex flex-col justify-center items-center mb-64'>
      <h1 className='text-3xl font-bold mt-12 text-indigo-600 mb-12'>Services</h1>
      <div className='flex flex-row justify-center'>
        <Service 
          title='Transcription' 
          description='lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
          price='0.02'
          unit='minute'
          featured={false}/>
        <Service
          title='Translation' 
          description=''
          price='0.02'
          unit='word'
          featured={true}/>
        <Service 
          title='Proofreading' 
          description=''
          price='0.01'
          unit='word'
          featured={false}/>
      </div>
    </div>
  )
}

export default Services