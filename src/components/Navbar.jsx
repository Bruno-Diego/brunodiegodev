import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks, socialLinks } from '../constants';
import { menu, close } from '../assets';

const Navbar = () => {
    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={`${styles.paddingX} w-full flex items-center 
    py-5 fixed top-0 z-20 bg-primary`}>
            <div className="w-full flex justify-between items-center 
      max-w-7x1 mx-auto">
                <Link to="/brunodiegodev/"
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0)
                    }}
                >
                    <p className='text-white text-[18px] font-bold 
          cursor-pointer flex'>Bruno Diego da Silva &nbsp;
                        <span className='sm:block hidden'>| Junior Full-Stack Developer</span>
                    </p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    <li
                        className={`flex space-x-6 mx-auto my-auto text-white font-poppins font-medium cursor-pointer text-[18px]`}
                    >
                        {socialLinks.map((socialLink) => (
                            <div>
                                <a href={socialLink.url} target="_blank" rel="noopener noreferrer"><i class={socialLink.icon}></i></a>
                            </div>
                        ))}
                    </li>
                    {navLinks.map((Link) => (
                        <li key={Link.id}
                            className={`${active === Link.title
                                ? "text-white"
                                : "text-secondary"
                                } hover:text-white p-1 rounded-md outline hover:outline-offset-2 text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(Link.title)}>
                            <a href={`#${Link.id}`}>{Link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img
                        src={toggle ? close : menu}
                        alt='menu'
                        className='w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={() => setToggle(!toggle)}
                    />
                </div>
                <div
                    className={`${!toggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                >
                    <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                        {navLinks.map((Link) => (
                            <li key={Link.id}
                                className={`text-white font-poppins font-medium cursor-pointer text-[18px]`}
                                onClick={() => {
                                    setToggle(!toggle);
                                    setActive(Link.title);
                                }}>
                                <a href={`#${Link.id}`}>{Link.title}</a>
                            </li>
                        ))}
                        <li
                            className={`flex space-x-6 mx-auto my-auto text-white font-poppins font-medium cursor-pointer text-[16px]`}
                        >
                            {socialLinks.map((socialLink) => (
                                <div>
                                    <a href={socialLink.url} target="_blank" rel="noopener noreferrer"><i class={socialLink.icon}></i></a>
                                </div>
                            ))}
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Navbar