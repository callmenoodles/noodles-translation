const Home = () => {
  return(
    <div className='flex flex-row justify-center items-center h-full'>
      <div className='mb-48'>
        <h1 className='text-4xl font-bold mb-4'>Accurate English &lt;&gt; Dutch <br></br>Translation</h1>
        <p className='mb-4'>
          Nonny, ik houd van jou</p>
        <div className='w-48 h-12 bg-indigo-600 rounded-full flex justify-center items-center text-xl text-white'>
          Contact Me
        </div>
      </div>
      <img src='/other.png' className='mb-12' style={{'width':'40%'}}/>
    </div>
  )
}

export default Home