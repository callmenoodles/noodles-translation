import Service from './Service'

const Services = () => {
  return(
    <div className='flex flex-col justify-center items-center mb-64'>
      <h1 className='text-3xl font-bold mt-12 text-primary mb-8'>Services</h1>
      <div className='flex smaller:flex-col lg:flex-row justify-center'>
        <Service 
          title='Transcription' 
          description='I will transcribe audio or speech from English to Dutch or from Dutch to English with options for clean verbatim or non-verbatim transcription.'
          price='0.02'
          unit='minute'
          featured={false}/>
        <Service
          title='Translation' 
          description='I provide general and technical translation from English to Dutch or from Dutch to English for documents, books, software, websites, apps, manuals and more!'
          price='0.02'
          unit='word'
          featured={true}/>
        <Service 
          title='Proofreading' 
          description="Wrong translation will look unprofessional and might lead you to losing potential customers. I will proofread and correct any English or Dutch file to make sure it's professional."
          price='0.01'
          unit='word'
          featured={false}/>
      </div>
    </div>
  )
}

export default Services