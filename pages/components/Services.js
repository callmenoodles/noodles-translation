import Service from './Service'

const Services = () => {
  return(
    <div className='flex flex-col justify-center items-center mb-64'>
      <h1 className='text-3xl font-bold mt-12 text-indigo-600 mb-8'>Services</h1>
      <div className='flex flex-row justify-center'>
        <Service/>
        <Service/>
        <Service/>
      </div>
    </div>
  )
}

export default Services