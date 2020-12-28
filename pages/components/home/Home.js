const Home = () => {
  return(
    <div className='flex flex-row justify-center items-center h-full'>
      <div className='relative bottom-40'>
        <h1 className='text-4xl font-bold mb-4'>Accurate English to Dutch <br></br>Translation</h1>
        <p className='mb-4'>
          Need a translator?</p>
        <div className='w-48 h-12 bg-primary-500 rounded-full flex justify-center items-center text-xl text-white'>
          Contact Me
        </div>
      </div>
      <img src='/other.png' className='relative bottom-20' style={{'width':'40%'}}/>
    </div>
  )
}

export default Home