import React from 'react';
import { IoHeartOutline, IoHeartSharp, IoCloseSharp } from 'react-icons/io5';
import { ToastContainer } from 'react-toastify';

export default function FavoriteItems({favorites, totalBidPrice, handleRemoveFromFavorites}) {
    return (
        <div className="favorite-items rounded-3xl bg-neutral-900 h-fit col-span-6 lg:col-span-2">
            <ToastContainer
            position="top-center"
            ></ToastContainer>
            <FavoritesHead favorites={favorites}></FavoritesHead>
            <div className="border border-neutral-700"></div>
            <FavoritesBody favorites={favorites} handleRemoveFromFavorites={handleRemoveFromFavorites}></FavoritesBody>
            <div className="border border-neutral-700"></div>
            <FavoritesFoot totalBidPrice={totalBidPrice}></FavoritesFoot>
        </div>
    )
}

const FavoritesHead = ({favorites}) => {
    return (
        <h3 className="mx-8 mt-8 my-6 text-3xl font-medium flex justify-center items-center gap-3">{favorites.length > 0 ? <IoHeartSharp></IoHeartSharp> : <IoHeartOutline></IoHeartOutline>} Favorite Items</h3>
    )
}

const FavoritesBody = ({favorites, handleRemoveFromFavorites}) => {
    if (favorites.length > 0) {
        return (
            <div className="p-12 space-y-6">
                {
                    favorites.map(favorite => {
                        return (
                            <div className="flex justify-between">
                                <div className="flex gap-6">
                                    <img src={favorite.image} className="min-w-24 min-h-24 max-w-24 max-h-24 object-cover" />
                                    <div className="space-y-6">
                                        <p>{favorite.title}</p>
                                        <div className="flex gap-6">
                                            <p>${favorite.currentBidPrice}</p>
                                            <p>Bids: {favorite.bidsCount}</p>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="h-fit" onClick={() => handleRemoveFromFavorites(favorite.id)}>
                                    <IoCloseSharp className="text-2xl"></IoCloseSharp>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    else {
        return (
            <div className="p-12 space-y-6">
                <h4 className="text-2xl font-medium text-center">No favorites yet 😕</h4>
                <p className="text-lg">Click the Heart (💟) Icon on any item to add it to your Favorites.</p>
            </div>
        )
    }
}

const FavoritesFoot = ({totalBidPrice}) => {
    return (
        <div className="m-8 flex justify-between items-center gap-6">
            <h4 className="text-2xl">Total Bids Amount</h4>
            <h4 className="text-2xl font-medium">${totalBidPrice}</h4>
        </div>
    )
}