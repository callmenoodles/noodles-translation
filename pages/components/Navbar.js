import Link from 'next/link'
import Dropdown from 'rc-dropdown'
import Menu, {Item as MenuItem} from 'rc-menu'
import 'rc-dropdown/assets/index.css'

const Navbar = () => {
  const onSelect = ({key}) => console.log(`Key ${key}`)
  const onVisibleChange = (visible) => {};

  const menu = (
    <Menu onSelect={onSelect}>
      <MenuItem key='1'>Translation</MenuItem>
      <MenuItem key='2'>Proofreading</MenuItem>
      <MenuItem key='3'>Transcription</MenuItem>
    </Menu>
  )


  return(
    <div>
      <ul className='flex flex-row'>
        <Link href='/'><a><li className='m-4'>Home</li></a></Link>
        <Dropdown
          trigger={['hover']}
          overlay={menu}
          animation='slide-up'
          onVisibleChange={onVisibleChange}
          className='m-4'
        >
          <button>Services</button>
        </Dropdown>
        <Link href='/about'><a><li className='m-4'>About</li></a></Link>
        <Link href='/contact'><a><li className='m-4'>Contact</li></a></Link>
      </ul>
    </div>
  )
}

export default Navbar
