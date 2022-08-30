import React, {useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {HiMenu} from 'react-icons/hi'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import{Link} from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [logo,setLogo]= useState(false)
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo)
    }

  return (
    <div className='flex items-center justify-between h-20'>
        <div >
        <h1 onClick={handleNav} className={logo ? 'hidden': 'block'}>CEGECI</h1>
        </div>
     <ul className='hidden md:flex'>
              <Link to="/">
                <li>accueil</li>
              </Link>

              <Link to="Logements">
        <li>Logements</li>
             </Link>

               <Link to="Information">
                <li>Informations</li>
               </Link>

               <Link to="Contact">
                    <li>Contact</li>
                 </Link>
     </ul>
     <div className='hidden md:flex'>
        <li className='connexion'>Se connecter</li>
        <li className='connexion'>S'inscrire</li>
     </div>

     {/*Hamburger*/}

     <div onClick={handleNav} className='md:hidden'>
        {nav ? <AiOutlineClose className='close' size={30}/>:<HiMenu size={30}/> }

     </div>

     {/*Pour mobile dropdown*/}

     <div onClick={handleNav} className={nav ?'absolute left-0 top-0 w-full px-4 flex flex-col py-7 bg-gray-100/95': 'absolute left-[-100%]' }>
        <ul>
        <h1 className='text-black'>CEGECI</h1>
             <Link to="/">
                <li className='border-b'>accueil</li>
              </Link>

              <Link to='Logements'>
        <li className='border-b'>Logements</li>
              </Link>

                 <Link to="Information">
                    <li className='border-b'>Information</li>
                 </Link>

                 <Link to="Contact">
                    <li className='border-b'>Contact</li>
                 </Link>

        <div className='flex flex-col'>
            <button className='my-6'>Se connecter</button>
            <button>S'inscrire</button>
        </div>
        <div className='flex justify-between my-6'>
          <FaFacebook className='icon'/>
          <FaTwitter className='icon'/>
          <FaInstagram className='icon'/>
          <FaLinkedin className='icon'/>
        </div>
        </ul>
     </div>
    </div>
  )
}

export default Navbar
