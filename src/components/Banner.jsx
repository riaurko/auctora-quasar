import React from 'react';

export default function Banner() {
    return (
        <section id="banner" className="px-4 md:px-20 xl:px-28 2xl:px-36 py-16 md:py-52 xl:py-72 space-y-6">
            <h1 className="max-md:text-center text-4xl lg:text-5xl font-semibold md:w-2/5 bg-gradient-to-r from-blue-400 to-blue-600 max-md:to-blue-500 bg-clip-text text-transparent">Bid on Unique Items from around the World</h1>
            <p className="max-md:text-center text-2xl font-light md:w-2/5 pb-6 text-blue-50 max-md:font-medium">Discover rare collections, luxury goods, and vintage treasures in our curated auctions.</p>
            <a href="#start-of-auctions">
                <div className="max-lg:text-center">
                    <button type="button" className="px-8 py-4 font-medium text-xl bg-neutral-900 hover:bg-neutral-950 rounded-full hover:drop-shadow-[0_0_25px_rgba(20,20,20,1)] active:drop-shadow-none transition-[filter] duration-200" title="🎁">Explore Auctions</button>
                </div>
            </a>
        </section>
    )
}