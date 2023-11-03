import React, { useContext } from 'react';
import './ImageItem.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

function ImageItem(props) 
{
    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() 
    {
        if(itemIsFavorite)
        {
            favoritesCtx.removeFavorite(props.id);
        }
        else
        {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                name: props.name
            })
        }
    }

    return(
        <li className='item'>
            <Card>
            <div className='image'>
                <img src={props.image} alt={props.title} />
            </div>
            <div className='content'>
                <h3>{props.title}</h3>
                <address>{props.name}</address>
                <p>{props.description}</p>
            </div>
            <div className='actions'>
                <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
            </div>
            </Card>
        </li>
    );
}

export default ImageItem;