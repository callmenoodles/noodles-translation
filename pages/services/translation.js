import Header from '../components/Header'
import Footer from '../components/Footer'

const Translation = () => {
  return(
    <div className='flex flex-col items-center'>
      <Header/>
      <div style={{'min-height':'calc(100vh - 64px'}}>
        <h1>Translation</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default Translation