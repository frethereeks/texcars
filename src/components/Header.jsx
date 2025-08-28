import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineCar } from "react-icons/ai";
import { PiShoppingCartLight } from 'react-icons/pi';
import { RiMenu3Fill } from 'react-icons/ri';
import { useSelector } from 'react-redux';

export default function Header() {
    const location = useLocation();
    const [navOpen, setNavOpen] = useState(false);
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        // This effect can be used to handle any side effects when the location changes
        // For example, you might want to scroll to the top of the page on route change
        window.scrollTo(0, 0);
    }, [location.pathname]);


    const navLinks = [
        { id: "1230", name: 'Home', path: '/' },
        { id: "1231", name: 'About', path: '/about' },
        { id: "1232", name: 'Explore Cars', path: '/shop' },
        { id: "1233", name: 'Contact', path: '/contact' },
    ]

    return (
        <header className='bg-white md:p-2 md:rounded-full fixed top-0 md:top-4 left-0 md:left-1/2 md:-translate-x-1/2 w-full md:container z-50 shadow-lg'>
            <div className="container mx-auto relative flex justify-between md:items-center gap-4 p-4 md:p-0">
                <Link to="/" className='flex items-center gap-2'>
                    {/* <div className="h-10 w-10 rounded-full grid place-items-center bg-primary flex-shrink-0">
                        <AiOutlineCar className='text-white text-2xl md:text-3xl flex-shrink-0' />
                    </div> */}
                        <div className="h-10 w-10 rounded-full bg-secondary relative">
                            <div className="h-[85%] w-[85%] rounded-full border-4 border-white absolute right-0 bottom-0 bg-secondary overflow-hidden">
                                <div className="absolute h-1/2 w-[70%] bg-white rounded-full -rotate-[22deg] top-[0%] left-[60%]"></div>
                            </div>
                        </div>
                    {/* <figure className="h-10 w-10 grid place-items-center bg-primary rounded-full">
                    </figure> */}
                    <h1 className="text-lg md:text-xl font-bold text-[#e11836]">Texcars</h1>
                </Link>
                <nav className={`flex-1 bg-backdrop md:bg-white w-full absolute md:static top-full ${navOpen ? "left-0" : "left-full"} transition-all duration-300 flex flex-col md:flex-row justify-center md:items-center md:gap-2`}>
                    {
                        navLinks.map((link) => (
                            (link.path === "/contact") ?
                                <a className={`${link.path === location.pathname ? 'text-white bg-secondary' : 'text-primary hover:text-white hover:bg-secondary'} font-semibold py-1.5 px-4 md:rounded-md`} key={link.id} href={link.path}>{link.name}</a>
                                :
                                <Link className={`${link.path === location.pathname ? 'text-white bg-secondary' : 'text-primary hover:text-white hover:bg-secondary'} font-semibold py-1.5 px-4 md:rounded-md`} key={link.id} to={link.path}>{link.name}</Link>
                        ))
                    }
                </nav>
                <div className="flex gap-2 w-max">
                    <Link to="/cart" className="relative bg-secondary rounded-full h-10 w-10 grid place-items-center text-2xl md:text-3xl text-white">
                        <PiShoppingCartLight />
                        <span className="h-5 w-5 rounded-full bg-primary text-xs text-white grid place-items-center absolute -top-1 -left-2 border border-white">{cart.length ?? 0}</span>
                    </Link>
                    <div onClick={() => setNavOpen(!navOpen)} className="relative md:hidden h-10 w-10 grid place-items-center text-2xl text-primary bg-backdrop hover:bg-primary hover:text-white rounded-full cursor-pointer">
                        <RiMenu3Fill />
                    </div>
                </div>
            </div>
        </header>
    )
}
