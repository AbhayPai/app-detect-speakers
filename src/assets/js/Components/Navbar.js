/*
 *  All Usable Libraries in this File
 */
import React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(true);

  return (
    <React.Fragment>
      <nav className='navbar'>
        <div className='navbar--logo'>
          <a className='navbar--logo__link' title='Abhay Pai' href='https://abhaypai.github.io/profile/web/#/about'>
            <img src='./images/ap-logo.jpg' alt='Abhay Pai' className='navbar--logo__img' />
          </a>
        </div>
        <button className={mobileMenu ? 'navbar--hamburger show' : 'navbar--hamburger hide'} onClick={() => setMobileMenu(!mobileMenu)}>
          <svg viewBox='0 0 100 80' width='40' height='40'>
            <rect width='100' height='20' />
            <rect y='30' width='100' height='20' />
            <rect y='60' width='100' height='20' />
          </svg>
        </button>
        <button className={mobileMenu ? 'navbar--x hide' : 'navbar--x show'} onClick={() => setMobileMenu(!mobileMenu)}>
          <svg viewBox='0 0 40 40' width='40' height='40'>
            <path d='M 10,10 L 30,30 M 30,10 L 10,30' />
          </svg>
        </button>
        <div className='navbar--menu'>
          <ul className={mobileMenu ? 'navbar--menu__header hide' : 'navbar--menu__header show'}>
            <li className='navbar--menu__list'>
              <a className='navbar--menu__link' href='https://abhaypai.github.io/profile/web/#/about'>
                About
              </a>
            </li>
            <li className='navbar--menu__list'>
              <a className='navbar--menu__link' href='https://abhaypai.github.io/profile/web/#/skills'>
                Skills
              </a>
            </li>
            <li className='navbar--menu__list'>
              <a className='navbar--menu__link' href='https://abhaypai.github.io/profile/web/#/education'>
                Education
              </a>
            </li>
            <li className='navbar--menu__list'>
              <a className='navbar--menu__link' href='https://abhaypai.github.io/profile/web/#/work-experience'>
                Work Experience
              </a>
            </li>
            <li className='navbar--menu__list'>
              <a className='navbar--menu__link active' href='https://abhaypai.github.io/profile/web/#/project'>
                Project App Detector
              </a>
            </li>
            <li className='navbar--menu__list'>
              <a className='navbar--menu__link' href='https://abhaypai.github.io/profile/web/#/basic-frameworks'>
                Basic Frameworks
              </a>
            </li>
            <li className='navbar--menu__list'>
              <a className='navbar--menu__link' href='https://abhaypai.github.io/profile/web/#/concepts'>
                Concepts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

