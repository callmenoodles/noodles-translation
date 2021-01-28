import Link from 'next/link'

const About = () => {
  return(
    <div className='flex flex-row justify-center items-center mb-64'>
      <img src='/hello.svg' alt='hello' className='w-1/4 mr-24 smaller:hidden'/>
      <div className='smaller:w-4/5 lg:w-2/5 xl:w-144 2xl:w-144'>
        <h1 className='text-3xl font-bold mt-12 text-primary'>Let me introduce myself.</h1>
        <p className='mt-4 text-lg break-word'>
          Noodles Translation is run by me. Alex Lushiku. I am a <span className='text-primary font-semibold'>native Dutch</span> speaker and an expert in the English language. I work a lot with both languages. This includes but is not limited to writing, <span className='text-primary font-semibold'>translation, transcription, proofreading</span>, and personal projects. Moreover, I have a Cambridge English: Advanced (CAE) certificate to prove these skills.
          <br></br><br></br>
          I work quickly but I make sure I do my work correctly when translating from both English to Dutch or from 
           Dutch to English. 
          I provide <span className='text-primary font-semibold'>general translation</span> and because of my technical background as a developer 
          I provide <span className='text-primary font-semibold'>technical translation</span> and <span className='text-primary font-semibold'>software localization</span> as well.
          <br></br><br></br>
          Don't hesitate and <Link href='/contact'><u className="cursor-pointer" style={{textDecorationColor:"#10B981", textDecorationThickness:"2px"}}>send me a message</u></Link> if you need a <span className='text-primary font-semibold'>quick and accurate</span> Dutch translator!
        </p>
      </div>
    </div>
  )
}

export default About