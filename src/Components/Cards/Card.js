import './Cards.css';
import Films from '../../swapiDataFetch';
import React from "react";
import lightsabersLit from '../../media/lightsabers-lit.png';

class Card extends React.Component {
    render() {
        console.log(Films.Data.Titles)
        return (
            <div>
                {Films.Data.Films.map(title => (
                    <div className="card">
                        <h1>{title}</h1>
                        {/* <img src={lightsabersLit} className="lightsabersLit" /> */}
                    </div>
                ))}
                =            </div>
        )
    }
}

export default Card;