import Header from './components/Header'
import Footer from './components/Footer'

const About = () => {
  return(
    <div className='flex flex-col'>
      <div className='flex justify-center'>
        <Header/>
      </div>
      <div className='flex flex-row justify-center items-start' style={{'min-height':'calc(100vh - 64px'}}>        
        <div className='sm:w-2/5 md:w-2/5 lg:w-2/5 xl:w-144 2xl:w-144 mt-28'>
          <h1 className='text-3xl font-bold mt-12 text-primary'>What is Noodles?</h1>
          <p className='mt-4 text-lg'>
            My name is Alex Lushiku and I am a native Dutch speaker and an expert in the English language. A lot of the work I do is done in English. This includes but is not limited to writing, general conversation and projects. Moreover, I have a Cambridge Advanced English (CAE) certificate to prove these skills.
            <br></br><br></br>
            I work quickly but I make sure I do my work correctly when translating from both English to Dutch or from Dutch to English. I do general translations and because of my technical background as a developer I will do technical, website and app translations as well.
            <br></br><br></br>
            Don't hesitate and shoot me a message if you need a quick and accurate Dutch translator!
          </p>
        </div>
        <img src='/hello.svg' className='h-96 mt-40 ml-24 mr-12 w-96'/>
      </div>
      <div className='flex justify-center'>
        <Footer/>
      </div>
    </div>
  )
}

export default About