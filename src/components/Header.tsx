// src/components/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SelectOpt from './SelectOpt';
import { MenuCustomAnimation } from './SelectOption';
import Logo from '../../public/logo.png'

const Header: React.FC = () => {
    const [show, setShow ] = useState(false)

    const handleClick = () => {
            
        setShow(!show)
    }
  return (
    <header className="bg-blue-500 text-white ">
      <div className="container px-4 mx-auto">
         <nav className='flex justify-between items-center py-5'>
            <div>
              <Link to={'/'}>
              <img className='w-[120px]' src={Logo} alt="" /></Link>
            </div>
            <ul className='flex justify-between items-center gap-20 '>
                <li className='cursor-pointer'>
                    <Link to={'/about-us'}>About us</Link>
                </li>
                <li className='cursor-pointer'>
                    <Link to={'/why'}>Why Orbiflare</Link>
                </li>
                <li className='cursor-pointer' onClick={() =>handleClick() }>
                    <MenuCustomAnimation/>
                </li>
                
            </ul>
         </nav>
         {
            show && <SelectOpt/>
         }
      </div>
    </header>
  );
};

export default Header;
