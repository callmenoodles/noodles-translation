import Link from 'next/link'
import { useRouter } from 'next/router'
import Dropdown from 'rc-dropdown'
import Menu, { Item as MenuItem } from 'rc-menu'
import 'rc-dropdown/assets/index.css'

const Navbar = () => {
  const router = useRouter()
  
  const onSelect = ({key}) => {
    router.push(`/services/${key}`)
  }

  const menu = (
    <Menu onSelect={onSelect}>
      <MenuItem key='translation'>Translation</MenuItem>
      <MenuItem key='proofreading'>Proofreading</MenuItem>
      <MenuItem key='transcription'>Transcription</MenuItem>
    </Menu>
  )


  return(
    <div>
      <ul className='flex flex-row'>
        <Link href='/'><a><li className='m-4'>Home</li></a></Link>
        <Dropdown
          trigger={['hover']}
          overlay={menu}
          className='m-4'>
          <button>Services</button>
        </Dropdown>
        <Link href='/about'><a><li className='m-4'>About</li></a></Link>
        <Link href='/contact'><a><li className='m-4'>Contact</li></a></Link>
      </ul>
    </div>
  )
}

export default Navbar
