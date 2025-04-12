import React, { useEffect, useState } from 'react';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import { Zoom, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Auction({setFavorites, addBidPrice, checkFavorited}) {
    const [auctions, setAuctions] = useState([]);
    useEffect(() => {
        fetch("auctions.json")
        .then(response => response.json())
        .then(data => setAuctions(data));
    }, [])
    return (
        <div className="auction-items rounded-3xl bg-neutral-900 col-span-6 lg:col-span-4">
            <AuctionTableHead></AuctionTableHead>
            <div className="border border-neutral-700"></div>
            <div className="table-body">
                {
                    auctions.map((auction) => {
                            return (
                                <>
                                    <AuctionItem key={auction.id} auction={auction} setFavorites={setFavorites} addBidPrice={addBidPrice} isFavorited={checkFavorited(auction.id)} ></AuctionItem>
                                    {
                                        auction.id < auctions.length ? <div className="border border-neutral-700"></div> : ''
                                    }
                                </>
                            )
                    })
                }
            </div>
        </div>
    )
}

const AuctionTableHead = () => {
    return (
        <div className="table-head grid max-md:grid-cols-8 grid-cols-6 text-sm lg:text-xl m-4 lg:m-8">
            <h5 className="col-span-2 lg:col-span-3">Item</h5>
            <h5 className="max-lg:col-span-2">Current Bid</h5>
            <h5 className="max-lg:col-span-2">Time Left</h5>
            <h5 className="max-lg:col-span-2">Bid Now</h5>
        </div>
    )
}

const AuctionItem = ({auction, setFavorites, addBidPrice, isFavorited}) => {
    const handleFavIcon = () => {
        if (!isFavorited) {
            setFavorites(previous => [...previous, auction]);
            addBidPrice(auction.currentBidPrice)
            toast.success("❤️ Item Added to your Favorites!", {
                position: 'top-center',
                autoClose: 2000,
                theme: 'dark',
                draggable: true,
                pauseOnHover: false,
                transition: Zoom,
            })
        }
    }
    return (
        <div className="p-4 lg:px-8 lg:py-6 grid max-md:grid-cols-8 grid-cols-6 items-center gap-8 text-primary hover:bg-[url(https://static.vecteezy.com/system/resources/thumbnails/032/509/833/small/4k-elegant-black-gradient-smooth-animation-background-black-clean-corporate-background-loop-free-video.jpg)] hover:bg-cover">
            <div className="col-span-2 lg:col-span-3 flex max-lg:flex-col lg:items-center gap-3 lg:gap-6">
                <img src={auction.image} alt="Image" className="min-w-12 max-w-12 min-h-12 max-h-12 lg:min-w-24 lg:max-w-24 lg:min-h-24 lg:max-h-24 rounded object-cover" />
                <h5 className="text-xs lg:text-xl">{auction.title}</h5>
            </div>
            <h6 className="text-xs lg:text-lg font-medium max-lg:col-span-2">${auction.currentBidPrice}</h6>
            <h6 className="text-xs lg:text-lg font-medium max-lg:col-span-2">{auction.timeLeft} left</h6>
            <button type="button" className={`text-xl lg:text-3xl max-lg:col-span-2 w-fit ${isFavorited ? 'text-red-500 cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={handleFavIcon}
            disabled={isFavorited}>
                {isFavorited ? <IoHeartSharp></IoHeartSharp> : <IoHeartOutline className="hover:text-red-400"></IoHeartOutline>}
            </button>
        </div>
    )
}

