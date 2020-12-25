const About = () => {
  return(
    <div className='flex flex-row justify-center items-center mb-64'>
      <img src='/hello.png' className='w-1/3 mr-12'/>
      <div className='w-2/5'>
        <h1 className='text-3xl font-bold mt-12 text-indigo-600'>Let me introduce myself.</h1>
        <p className='mt-4 text-lg'>
          My name is Alex Lushiku and I am a native Dutch speaker and an expert in the English language. A lot of the work I do is done in English. This includes but is not limited to writing, general conversation and projects. Moreover, I have a Cambridge Advanced English (CAE) certificate to prove these skills.
          <br></br><br></br>
          I work quickly but I make sure I do my work correctly when translating from both English to Dutch or from Dutch to English. I do general translations and because of my technical background as a developer I will do technical, website and app translations as well.
          <br></br><br></br>
          Don't hesitate and shoot me a message if you need a quick and accurate Dutch translator!
        </p>
      </div>
    </div>
  )
}

export default About