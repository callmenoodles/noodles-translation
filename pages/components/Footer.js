import Link from 'next/link'

const Footer = () => {
  return(
    <div className='border-t maxmd:h-32 md:h-16 w-11/12 flex maxmd:flex-col md:flex-row justify-evenly items-center'>      
      <h3>Developed by <Link href='https://noodles.services'><a className='text-primary'><u>Noodles</u></a></Link> with Next.js</h3>
      <h3>CoC: <span className='text-primary'>81879342</span></h3>
      <h3>Illustrations by <Link href='https://twitter.com/ninaLimpi'><a className='text-primary'><u>Katerina Limpitsouni</u></a></Link></h3>
    </div>
  )
}

export default Footer