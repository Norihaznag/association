// components/Navbar.js
import Link from 'next/link';
import { Fragment } from 'react';

const Navbar = () => {
  return (

      <Fragment>
          <nav className="bg-gray-800 p-4 flex justify-between">
          <ul className="flex justify-left space-x-4 text-white ml-5">
            <li>
              <Link href="/" className="hover:text-red-800">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Donate" className="hover:text-red-800">
                Donate
              </Link>
            </li>
            <li>
              <Link href="/About" className="hover:text-red-800">
                 About
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:text-red-800">
                Contact
              </Link>
            </li>
          </ul>
          <p className="text-gray-50 font-black">Logo place</p>
        </nav>
      </Fragment>
        
      );
    };
    

export default Navbar;
