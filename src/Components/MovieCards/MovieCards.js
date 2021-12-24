import React, { useEffect } from 'react';
import lightsabersLit from '../../media/lightsabers-lit.png';
import './Cards.css';

const MovieCards = (props) => {

    const FavouritesComponent = props.favouritesComponent;

    return (
        <div className="card-container" >
            {props.loaded === true ?
                props.movies.map((movie, index) => {
                    return (
                        <div key={'cardKey' + index} id={'movieCard' + index}>
                            <div className="card" >
                                <h3>{movie}</h3>
                                <img src={lightsabersLit} className="lightsabersLit" />
                                <div
                                    onClick={() => props.handleFavouritesClick(movie)}
                                    className='overlay'>
                                    <FavouritesComponent />
                                </div>
                            </div>

                        </div>
                    )
                })
                : <h1 className="loading">Loading...</h1>
            }
        </div>
    )
}

export default MovieCards;