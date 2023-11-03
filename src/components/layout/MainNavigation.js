import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './MainNavigation.css';
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() 
{
    const favoritesCtx = useContext(FavoritesContext);

    return(
        <header className="header">
            <div className="logo">galleria</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Images</Link>
                    </li>
                    <li>
                        <Link to="/new-image">Upload New Image</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites<span className="badge">{favoritesCtx.totalFavorites}</span></Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;