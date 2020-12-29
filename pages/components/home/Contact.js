import Link from 'next/link'

const Contact = () => {
  return(
    <div className='flex flex-col justify-center items-center mb-48'>
      <h1 className='text-3xl font-semibold mb-4'>
        Interested in working together?</h1>
        <Link href='/contact'>
          <div className='border-2 border-primary pl-4 pr-4 pt-2 pb-2 hover:bg-primary duration-300 rounded-full 
                          hover:text-white cursor-pointer text-primary font-semibold text-lg'>
            Contact Me
          </div>
        </Link>
    </div>
  )
}

export default Contact