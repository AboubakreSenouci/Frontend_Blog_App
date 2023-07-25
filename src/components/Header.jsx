import React from 'react';
import Logo from '../assets/Logo.svg';


const NavItem = ({name}) => {
    return(
        <li className='relative group'>
            <a href='/' className='px-4 py-2'>
               {name}
            </a>
            <span className='text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>
                /
            </span>
        </li>
    )
}
const Header = () => {

    const navItemInfo = [
        {name: "Home", type: "link", href: "/"},
        {name: "Articles", type: "link", href: "/"},
        {name: "Pages", type: "link", href: "/"},
        {name: "Pricing", type: "link", href: "/"},
        {name: "Faq", type: "link", href: "/"}
    ]
    return(
        <section>
            <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
                <div>
                   <img src={Logo} alt="logo" />
                </div>
                <div className='flex gap-x-9 items-center'>
                    <ul className='flex gap-x-3 font-semibold'>
                        {navItemInfo.map((item) => (
                            <NavItem key={item.name} name={item.name}/>
                        ))}
                    </ul>
                    <button className='border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 hover:text-white hover:bg-blue-500 duration-300 transition-all'> Sign in </button>
                </div>
            </header>
        </section>
    )
}
export default Header;