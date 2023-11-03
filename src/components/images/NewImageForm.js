import React, { useRef } from "react";
import './NewImageForm.css';
import Card from "../ui/Card";

function NewImageForm(props) 
{
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const nameInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) 
    {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredName = nameInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const photoData = {
            title: enteredTitle,
            image: enteredImage,
            name: enteredName,
            description: enteredDescription
        };

        props.onAddImage(photoData);
    }

    return(
        <Card>
            <form className="form" onSubmit={submitHandler}>
                <div className="control">
                    <label htmlFor="title">Image Title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div className="control">
                    <label htmlFor="image">Image URL</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>
                <div className="control">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" required id="name" ref={nameInputRef} />
                </div>
                <div className="control">
                    <label htmlFor="description">Image Description</label>
                    <textarea rows='5' required id="description" ref={descriptionInputRef}></textarea>
                </div>
                <div className="actions">
                    <button>Add Image</button>
                </div>
            </form>
        </Card>
    );
}

export default NewImageForm;