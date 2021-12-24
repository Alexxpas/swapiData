import React, { useEffect, useState } from "react";
import axios from 'axios';

import './Components/Cards/Cards.css';
import MovieCards from './Components/MovieCards/MovieCards';
import SearchTerm from './Components/Features/SearchTerm/SearchTerm';
import AddFavourite from './Components/AddFavourites/AddFavourites';
import RemoveFavourites from "./Components/RemoveFavourites/RemoveFavourites";

import './App.css';


function App() {

  const [Data, setData] = useState({
    Titles: [],
    Loaded: false
  })

  const [searchValue, setSearchValue] = useState('');

  const [favourites, setFavourites] = useState([]);


  //API CALL
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

  // useEffect(() => {

  //   console.log(Data.Titles);

  //   if (searchValue = '') {
  //     console.log('hi');
  //   }
  //   // if (Data.Titles.includes(searchValue)) {
  //   //   // setData.Titles.filter(film => film)
  //   // }

  // }, [])


  //SAVING TO STORAGE
  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
  }

  //FAVOURITING MOVIE CARD
  const addFavouriteMovie = (movie) => {
    if ([...favourites].includes(movie)) {
      alert('Woah there traveller, this movie has already been added to favourites')
      return;
    } else {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    }
  }

  //REMOVING FAVOURED MOVIE CARD
  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter((favourite) => favourite !== movie);
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  //SAVING FAVOURITES TO STORAGE
  useEffect(() => {
    const movieFavourites = JSON.parse
      (localStorage.getItem('react-movie-app-favourites'))
    setFavourites(movieFavourites);
  }, []);

  return (
    <div className="App">

      <main>
        <section>
          <SearchTerm
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <h2>Favourites:</h2>
          <div className='favourite-cards'>
            <MovieCards
              movies={favourites}
              loaded={Data.Loaded}
              handleFavouritesClick={removeFavouriteMovie}
              favouritesComponent={RemoveFavourites}
            />
          </div>
          <h2>Swapi Movies:</h2>
          <div className='films-cards'>
            <MovieCards
              movies={Data.Titles}
              loaded={Data.Loaded}
              handleFavouritesClick={addFavouriteMovie}
              favouritesComponent={AddFavourite}
            />
          </div>

        </section>
      </main >
    </div >
  );
}

export default App;
