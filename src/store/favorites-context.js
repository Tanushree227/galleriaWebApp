import React, { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteImage) => {},
    removeFavorite: (imageId) => {},
    itemIsFavorite: (imageId)=>{}
});

export function FavoritesContextProvider(props) 
{
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteImage) 
    {
        setUserFavorites((prevUserFavorites) => 
        {
            return prevUserFavorites.concat(favoriteImage);
        });
    }

    function removeFavoriteHandler(imageId) 
    {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(photo => photo.id !== imageId);
        });
    }

    function imageIsFavoriteHandler(imageId) 
    {
        return userFavorites.some(photo => photo.id === imageId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,

        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: imageIsFavoriteHandler
    };

    return( 
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;