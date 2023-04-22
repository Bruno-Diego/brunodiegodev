import React from 'react';
import { socialLinks } from '../constants';

const Footer = () => {
    return (
        <footer>
            <div className='flex flex-col items-center justify-center gap-4'>
                <h3 className='text-2xl font-bold'>Bruno Diego da Silva</h3>
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
                </ul>
            </div>
            <div className='mt-8 text-sm text-center'>
                <p>&copy; 2023 Bruno Diego da Silva. All rights reserved.</p>
                <p>Developed by Bruno Diego da Silva.</p>
                <p>Thank you for visiting!</p>
            </div>
        </footer>
    )
}

export default Footer