import React, { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import ImageList from "../components/images/ImageList";

function FavoritesPage() 
{
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavorites === 0)
    {
        content = <p>No Favorites yet. Do add some?</p>
    }
    else
    {
        content = <ImageList photos = {favoritesCtx.favorites} />
    }

    return(
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;