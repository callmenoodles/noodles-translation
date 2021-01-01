import Link from 'next/link'

const Service = (props) => {
  var featuredProperties = ''
  if (props.title === undefined) props.title = ''
  
  if (props.featured) {
    featuredProperties = 'transform scale-110 border-primary '
  }

  return(
    <div className={featuredProperties + 'relative shadow-sm rounded-lg border-2 w-72 h-96 m-5 flex flex-col box-content items-center'}>
      <div className='flex flex-col flex-wrap justify-center items-center w-full'>
        <h1 className='mt-4 font-semibold text-2xl text-center'>{props.title}</h1>
        <h3 className='text-center'>&euro;{props.price} per {props.unit}</h3>
      </div>
      <p className='text-center mt-6 w-2/3'>{props.description}</p>
      <div className='absolute mt-4 bottom-8 w-32 h-10 bg-primary cursor-pointer transform duration-100 hover:scale-105 rounded-full 
                      flex justify-center items-center'>
        <Link href={`/services/${props.title.toLowerCase()}`}><h2 className='text-white'>More Info</h2></Link>
      </div>
    </div>
  )
}

export default Service