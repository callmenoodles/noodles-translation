import Link from 'next/link'

const Footer = () => {
  return(
    <div className='border-t maxmd:h-32 md:h-16 w-11/12 flex maxmd:flex-col md:flex-row justify-evenly items-center'>      
      <h3>COC: <span className='text-primary'>81879342</span></h3>
      <h3>Developed by <Link legacyBehavior href='https://noodles.services'><a className='text-primary'><u>Noodles</u></a></Link> with Next.js</h3>
      <h3>VAT: <span className='text-primary'>NL003613819B93</span></h3>
    </div>
  )
}

export default Footer