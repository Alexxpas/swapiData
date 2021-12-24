import lightsabersLit from '../../media/lightsabers-lit.png';
// import './Cards.css';
import Films from '../../swapiDataFetch';
import Card from './Card';



export const Cards = () => {

    let favouritedCards = [];



    return (
        <section>
            <h2>My favourites:</h2>
            <div className="favorites card-container">
                <p>empty</p>
            </div>
            <h2>Swapi Movies:</h2>
            <div className='filmsArray card-container'>
                <Films />
            </div>
        </section>
    )
}

