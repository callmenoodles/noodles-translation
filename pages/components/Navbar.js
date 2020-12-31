import Link from 'next/link'
import { useRouter } from 'next/router'
import Dropdown from 'rc-dropdown'
import Menu, { Item as MenuItem } from 'rc-menu'
import 'rc-dropdown/assets/index.css'

const Navbar = () => {
  const router = useRouter()

  const menu = (
    <div class=' mt-2rounded-md shadow-md bg-white ring-1 ring-black ring-opacity-5'>
      <div class='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
        <Link href='/services/translation'><a class='block px-4 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-primary' role='menuitem'>Translation</a></Link>
        <Link href='/services/proofreading'><a class='block px-4 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-primary' role='menuitem'>Proofreading</a></Link>
        <Link href='/services/transcription'><a class='block px-4 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-primary' role='menuitem'>Transcription</a></Link>
      </div>
    </div>
  )

  return(
    <div>
      <ul className='flex flex-row'>
        <Link href='/'><a><li className='p-4 duration-200 hover:text-primary' style={{'fontSize':'1.05rem'}}>Home</li></a></Link>
        <Dropdown
          trigger={['hover']}
          overlay={menu}
          className=' p-4 cursor-default'>
          <button style={{'fontSize':'1.05rem'}}>Services</button>
        </Dropdown>
        <Link href='/about'><a><li className='p-4 duration-200 hover:text-primary' style={{'fontSize':'1.05rem'}}>About</li></a></Link>
        <Link href='/contact'><a><li className='p-4 duration-200 hover:text-primary' style={{'fontSize':'1.05rem'}}>Contact</li></a></Link>
      </ul>
    </div>
  )
}

export default Navbar
