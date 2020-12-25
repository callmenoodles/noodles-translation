const Home = () => {
  return(
    <div className='flex flex-row justify-center items-center h-full'>
      <div className='mb-48'>
        <h1 className='text-4xl font-bold mb-6'>Accurate English &lt;&gt; Dutch <br></br>Translation</h1>
        <div style={{'width':'200px', 'height':'50px','background':'#0088FF'}}>
          Contact me
        </div>
      </div>
      <img src='/other.png' className='mb-12' style={{'width':'40%'}}/>
    </div>
  )
}

export default Home