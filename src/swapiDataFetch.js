import React, { useEffect, useState } from "react";
import axios from 'axios';
import lightsabersLit from './media/lightsabers-lit.png';
import './Components/Cards/Cards.css';
import MovieCards from './Components/MovieCards/MovieCards';
// import SearchBox from './Components/SearchBox/SearchBox';




const Films = () => {

    const [Data, setData] = useState({
        Titles: [],
        Loaded: false
    })

    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        axios.get('https://www.swapi.tech/api/films/')
            .then(res => {
                let swapiData = res.data.result;

                setData({
                    Titles: swapiData.map((x) => {
                        return x.properties.title
                    }),
                    Loaded: true
                }
                )

            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    function handleSubmit(e) {
        e.preventDefault();
        console.log('...')
        console.log('why work now')
    }

    return (


        <div>
            {/* <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} /> */}

            <MovieCards movies={Data.Titles} loaded={Data.Loaded} />
        </div>
    )

}
export default Films;



// TODO, put search box with API call, make this page the APP top level.