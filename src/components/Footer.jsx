import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-neutral-900 p-4 md:p-20 xl:p-24 2xl:p-32">
            <h3 className="text-3xl font-bold text-center"><span className="bg-gradient-to-l from-blue-500 to-blue-700 bg-clip-text text-transparent">Auctora</span><span className="bg-gradient-to-l from-blue-400 to-blue-500 bg-clip-text text-transparent">Quasar</span></h3>
            <div className="flex gap-4 justify-center mt-4">
                <h5 className="text-xl">Bid.</h5>
                <h5 className="text-xl">Win.</h5>
                <h5 className="text-xl">Own.</h5>
            </div>
            <div className="flex gap-6 lg:gap-20 items-center justify-center text-sm lg:text-lg mx-auto mt-5">
                <a href="#navbar" title="Everyone's start is here">Home</a>
                <a href="#start-of-auctions" title="Explore, Bid, and Win">Auctions</a>
                <a href="#start-of-auctions" title="Find out what's an item related to">Categories</a>
                <a href="#start-of-auctions" title="Beginner or Forgot? Here's the procedure">How it works</a>
            </div>
            <h6 className="lg:text-lg text-center mt-6">&copy; 2025 AuctoraQuasar. All rights reserved.</h6>
        </footer>
    )
}