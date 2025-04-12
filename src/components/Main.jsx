import React, { useState } from 'react';
import Auction from './Auctions';
import FavoriteItems from './Favorites';
import { toast, Bounce } from 'react-toastify';

export default function Main() {
    // const [isFavorited, setIsFavorited] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [totalBidPrice, setTotalBidPrice] = useState(0);
    // const [isRemoved, setIsRemoved] = useState(false);
    const addBidPrice = (newBidPrice) => {
        setTotalBidPrice(totalBidPrice + newBidPrice);
    }
    const handleRemoveFromFavorites = (id) => {
        setTotalBidPrice(totalBidPrice - (favorites.filter(favorite => favorite.id === id)[0].currentBidPrice));
        const remainingFavorites = favorites.filter(favorite => favorite.id !== id);
        setFavorites(remainingFavorites);
        toast.warning("💔 Item Removed from your Favorites!", {
                position: 'top-center',
                autoClose: 2000,
                theme: 'dark',
                draggable: true,
                pauseOnHover: false,
                transition: Bounce,
            });
    }
    const checkFavorited = (id) => {
        return favorites.some(favorite => favorite.id === id);
    }
    return (
        <main className="px-0 md:px-20 xl:px-28 2xl:px-36 py-20 lg:py-32 space-y-6">
            <h3 id="start-of-auctions" className="text-3xl font-medium text-primary mx-4">Active Auctions</h3>
            <p className="lg:text-xl mx-4">Discover and bid on extraordinary items</p>
            <div className="grid grid-cols-6 gap-6">
                <Auction setFavorites={setFavorites} addBidPrice={addBidPrice} checkFavorited={checkFavorited} ></Auction>
                <FavoriteItems favorites={favorites} totalBidPrice={totalBidPrice} handleRemoveFromFavorites={handleRemoveFromFavorites}></FavoriteItems>
            </div>
        </main>
    )
}