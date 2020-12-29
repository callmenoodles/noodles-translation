import Link from 'next/link'

const Footer = () => {
  return(
    <div className='border-t h-16 w-11/12 flex justify-evenly items-center'>
      <h3>Made by <Link href='https://alexlushiku.com'><a className='text-primary'><u>Noodles</u></a></Link> with Next.js</h3>
      <h3>Illustrations by <Link href='https://twitter.com/ninaLimpi'><a className='text-primary'><u>Katerina Limpitsouni</u></a></Link></h3>
    </div>
  )
}

export default Footer