const Service = (props) => {
  var scaleProperty = ''
  
  if (props.featured) {
    scaleProperty = 'transform scale-110 '
  }

  return(
    <div className={scaleProperty + 'relative shadow-sm rounded-lg border-2 w-72 h-96 mr-4 ml-4 flex flex-col box-content items-center'}>
      <div className='flex flex-col flex-wrap justify-center items-center w-full'>
        <h1 className='mt-4 font-bold text-2xl text-center'>{props.title}</h1>
        <h3 className='text-center'>&euro;{props.price} per {props.unit}</h3>
      </div>
      <p className='text-center mt-4 w-2/3'>{props.description}</p>
      <div className='absolute mt-4 bottom-8 w-32 h-10 bg-indigo-500 flex rounded-full justify-center items-center'>
        <h2 className='text-white'>More Info</h2>
      </div>
    </div>
  )
}

export default Service