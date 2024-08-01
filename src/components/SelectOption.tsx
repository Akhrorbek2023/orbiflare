import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faInstagram, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const web = [
    {
        title: 'Telegram',
        image: <FontAwesomeIcon icon={faTelegram} />,
        href: ''
    },
    {
        title: 'Email',
        image: <FontAwesomeIcon icon={faEnvelope} />,
        href: ''
    },
    {
        title: 'LinkedIn',
        image: <FontAwesomeIcon icon={faLinkedinIn} />,
        href: ''
    },
    {
        title: 'Instagram',
        image: <FontAwesomeIcon icon={faInstagram} />,
        href: ''
    },
]
   

  export const MenuCustomAnimation = () => {
    return (
     <Menu
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <MenuHandler>
          <Button className="bg-opacity-15">Contact</Button>
        </MenuHandler>
        <MenuList>  
        {
               web.map((item, i) => (
                <MenuItem key={i} className='px-3 py-2 rounded text-blue-500 hover:bg-blue-500 hover:text-white'>
                <Link className='flex items-center space-x-2 ' to={item.href}>
                   {item.image} <span className='mr-4'></span> {item.title}
                </Link>
                
            </MenuItem>
               ))
             }
        </MenuList>
        {/* <MenuItem>Menu Item 1</MenuItem> */}
      </Menu>
    );
  }