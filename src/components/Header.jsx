import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

export default function Header() {
    return (
        <header className="bg-[url(https://i.ibb.co.com/MyrzZQp4/BackUp.png)] lg:bg-[url(https://i.ibb.co.com/6jsPM7r/banner-image.jpg)] bg-cover">
            <Navbar></Navbar>
            <Banner></Banner>
        </header>
    )
}