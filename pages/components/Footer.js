import Link from 'next/link'

const Footer = () => {
  return(
    <div className='border-t h-16 w-11/12 flex justify-center items-center'>
      <h3>Made by <Link href='https://alexlushiku.com'><a className='text-indigo-600'><u>Noodles</u></a></Link> with Next.js</h3>
    </div>
  )
}

export default Footer