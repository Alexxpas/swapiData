import React from "react";
import whiteheart from "../../media/redheart.png";

const AddFavourite = () => {
    return (
        <>
            <div className="favourites-wrap">
                <span className="favourites-text">Add to Favourites</span>
                <img src={whiteheart} className="fav-white-heart fav-heart" />
            </div>
        </>
    )
}

export default AddFavourite;