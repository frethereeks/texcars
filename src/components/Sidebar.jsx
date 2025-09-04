import React from 'react'
import { FaDiscord } from 'react-icons/fa6'
import { PiBooksLight } from 'react-icons/pi'
import { useDispatch } from 'react-redux'

export default function Sidebar() {
    const dispatch = useDispatch()

    const sidebarLinks = [
        {
            icon: <FaDiscord />,
            title: 'Home',
        },
        {
            icon: <PiBooksLight />,
            title: 'About',
        }
    ]

    return (
        <div className="flex">
            <div className='fixed top-0 bottom-0 left-0 h-screen w-16 m-0 flex flex-col text-white shadow-lg bg-primary py-10'>
                {
                    sidebarLinks.map(link => (
                        <button key={link.title} className="relative p-4 rounded-md cursor-pointer bg-primary hover:bg-secondary grid place-items-center text-2xl group">
                            <span className="absolute -right-full top-1/2 -translate-y-1/2 scale-y-0 group-hover:scale-y-100 transition-all duration-300 bg-primary text-white text-xs py-1 px-3">{link.title}</span>
                            <SidebarIcons icon={link.icon} />
                        </button>
                    ))
                }
            </div>
            <div className="flex-1 p-4 pl-20">
                <button onClick={() => dispatch({type: "site/logout"})} type="submit" className="py-2 px-6 md:px-10 rounded-md cursor-pointer bg-primary text-backdrop w-max">Logout</button>

            </div>
        </div>
    )
}


const SidebarIcons = ({ icon }) => (
    <div className='sidebar-icon'>
        {icon}
    </div>
)