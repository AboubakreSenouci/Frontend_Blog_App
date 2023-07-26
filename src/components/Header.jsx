import { React, useState } from 'react';

import Logo from '../assets/Logo.svg';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavItem = ({ item }) => {
    const [dropDown, setDropDown] = useState(false);

    const toggelDropDownHandler = () => {
        setDropDown((currentState) => { return !currentState });
    }
    return (
        <li className='relative group'>
            {item.type === 'link' ? (
                <>
                    <a href='/' className='px-4 py-2'>
                        {item.name}
                    </a>
                    <span className='text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>/</span>
                </>
            ) : (
                <div>
                    <button className='flex items-center gap-x-1'
                        onClick={toggelDropDownHandler}
                    >
                        {item.name}
                        <MdKeyboardArrowDown />
                    </button>
                    <div className={`${dropDown ? "block" : "hidden"} lg:hidden transition-all lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
                        <ul className='bg-dark-softlg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden'>
                            {item.items.map((page, index) => (
                                <a href='/' key={index} to={page.href} className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'>
                                    {page.title}
                                </a>
                            ))}
                        </ul>
                    </div>
                </div>
            )
            }

        </li>
    )
}

const Header = () => {

    const navItemInfo = [
        { name: "Home", type: "link", href: "/" },
        { name: "Articles", type: "link", href: "/" },
        {
            name: "Pages", type: "DropDown", href: "/", items: [
                { title: "About us", href: "/" },
                { title: "Contact us", href: "/" },
            ],
        },
        { name: "Pricing", type: "link", href: "/" },
        { name: "Faq", type: "link", href: "/" }
    ]

    const [navIsVisible, setNavIsVisible] = useState(false);

    const navVisibilityHandler = () => {
        setNavIsVisible((currentState) => { return !currentState })
    }
    return (
        <section>
            <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
                <a href='/'>
                    <img src={Logo} alt="logo" />
                </a>
                <div className="lg:hidden z-50">
                    {navIsVisible ? (
                        <AiOutlineClose
                            className="w-6 h-6 cursor-pointer"
                            onClick={navVisibilityHandler}
                        />
                    ) : (
                        <AiOutlineMenu className="w-6 h-6 cursor-pointer" onClick={navVisibilityHandler} />
                    )}
                </div>
                <div
                    className={`${navIsVisible ? "right-0" : "-right-full"
                        } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
                >
                    <ul className='text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold'>
                        {navItemInfo.map((item) => (
                            <NavItem key={item.name} item={item} />
                        ))}
                    </ul>
                    <button className='border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 hover:text-white hover:bg-blue-500 duration-300 transition-all mt-5 lg:mt-0'> Sign in </button>
                </div>
            </header>
        </section>
    )
}
export default Header;