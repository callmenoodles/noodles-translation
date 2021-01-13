const About = () => {
  return(
    <div className='flex flex-row justify-center items-center mb-64'>
      <img src='/hello.svg' alt='hello' className='w-1/4 mr-24 smaller:hidden'/>
      <div className='smaller:w-4/5 lg:w-2/5 xl:w-144 2xl:w-144'>
        <h1 className='text-3xl font-bold mt-12 text-primary'>Let me introduce myself.</h1>
        <p className='mt-4 text-lg break-word'>
          My name is Alex Lushiku and I am a <span className='text-primary font-semibold'>native Dutch</span> speaker and an expert in the English language. I work a lot with both languages. This includes but is not limited to writing, <span className='text-primary font-semibold'>translation, transcription, proofreading</span> and personal projects. Moreover, I own a Cambridge English: Advanced (CAE) certificate to prove these skills.
          <br></br><br></br>
          I work quickly but I make sure I do my work correctly when translating from both <span className='text-primary font-semibold'>English to Dutch </span>or from 
          <span className='text-primary font-semibold'> Dutch to English</span>. 
          I do <span className='text-primary font-semibold'>general translation</span> and because of my technical background as a developer 
          I will do <span className='text-primary font-semibold'>technical, website and app translation</span> as well.
          <br></br><br></br>
          Don't hesitate and shoot me a message if you need a <span className='text-primary font-semibold'>quick and accurate</span> Dutch translator!
        </p>
      </div>
    </div>
  )
}

export default About