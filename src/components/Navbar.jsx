import React from 'react';
import './Navbar.css';
import { IoNotificationsOutline} from 'react-icons/io5';
import { BiMenuAltLeft } from 'react-icons/bi';

export default function Navbar() {
    return (
        <nav id="navbar" className="flex justify-between items-center px-4 md:px-20 xl:px-28 2xl:px-36 py-6 bg-neutral-900/55 backdrop-blur-md">
            <MobileMenu></MobileMenu>
            <Logo></Logo>
            <NavLinks></NavLinks>
            <NotificationAndProfilePic></NotificationAndProfilePic>
        </nav>
    )
}

const MobileMenu = () => {
    return (
        <h4 className="md:hidden text-4xl relative">
            <BiMenuAltLeft className="hover:rotate-90 transition-transform duration-200"></BiMenuAltLeft>
            <ul className="bg-neutral-950/60 backdrop-blur space-y-4 hidden absolute top-10 text-lg p-6 rounded-xl w-max">
                <li className="hover:scale-110 transition-transform">
                    <a href="#">Home</a>
                </li>
                <li className="hover:scale-110 transition-transform">
                    <a href="#start-of-auctions">Auctions</a>
                </li>
                <li className="hover:scale-110 transition-transform">
                    <a href="#start-of-auctions">Categories</a>
                </li>
                <li className="hover:scale-110 transition-transform">
                    <a href="#start-of-auctions">How it works</a>
                </li>
            </ul>
        </h4>
    )
}

const Logo = () => {
    return (
        <div className="logo cursor-pointer">
            <h3 className="text-2xl lg:text-3xl font-bold hover:drop-shadow-[0_0_20px_rgba(55,75,180,1)] transition-[filter] duration-200"><span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Auctora</span><span className="bg-gradient-to-r from-blue-500 max-md:from-blue-400 to-blue-700 max-md:to-blue-500 bg-clip-text text-transparent">Quasar</span></h3>
        </div>
    )
}

const NavLinks = () => {
    return (
        <div className="nav-links max-md:hidden">
            <ul className="flex gap-20 items-center text-xl">
                <li title="🏠" className="hover:-translate-x-1 hover:-translate-y-1 hover:text-primary transition-transform duration-200">
                    <a href="#">Home</a>
                </li>
                <li title="🎁" className="hover:-translate-x-1 hover:-translate-y-1 hover:text-primary transition-transform duration-200">
                    <a href="#start-of-auctions">Auctions</a>
                </li>
                <li title="📃" className="hover:-translate-x-1 hover:-translate-y-1 hover:text-primary transition-transform duration-200">
                    <a href="#start-of-auctions">Categories</a>
                </li>
                <li title="⚙️" className="hover:-translate-x-1 hover:-translate-y-1 hover:text-primary transition-transform duration-200">
                    <a href="#start-of-auctions">How it works</a>
                </li>
            </ul>
        </div>
    )
}

const NotificationAndProfilePic = () => {
    return (
        <div className="nav-profile flex items-center gap-2 lg:gap-4">
            <div className="bg-neutral-700 p-2 rounded-full text-2xl relative">
                <IoNotificationsOutline></IoNotificationsOutline>
                <span className="w-4 h-4 rounded-full text-xs bg-[#0E2954] absolute top-0 right-2 grid place-items-center">7</span>
            </div>
            <img src="https://i.ibb.co.com/CsMvFnH7/Rakibul-Islam.png" className="w-10 h-10 rounded-full hover:contrast-125" />
        </div>
    )
}