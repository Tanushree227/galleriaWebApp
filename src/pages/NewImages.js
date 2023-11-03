import React from "react";
import { useNavigate } from 'react-router-dom';
import NewImageForm from "../components/images/NewImageForm";

function NewImagePage() 
{
    const navigate = useNavigate();

    function addImageHandler(photoData) 
    {
        fetch(
            'https://galleria-a870c-default-rtdb.firebaseio.com/gallery.json',
            {
                method: 'POST',
                body: JSON.stringify(photoData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/');
        });
    }

    return(
        <section>
            <h1>Upload New Image</h1>
            <NewImageForm onAddImage={addImageHandler} />
        </section>
    )
}

export default NewImagePage;