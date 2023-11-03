import React from "react";
import "./ImageList.css";
import ImageItem from "./ImageItem";

function ImageList(props) 
{
    return(
        <ul className="list">
            {props.photos.map((photo) => 
                <ImageItem 
                    key={photo.id}
                    id = {photo.id}
                    image = {photo.image}
                    title={photo.title}
                    name={photo.name}
                    description={photo.description}
                />
            )}
        </ul>
    );
}

export default ImageList;