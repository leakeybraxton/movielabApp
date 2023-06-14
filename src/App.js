import './App.css';
import MovieCard from './MovieCard';

import React from 'react';
import { useEffect, useState } from 'react';
import SearchIcon from "./search.svg";
// cbb6980f
// const Person = (props) => {
//   return (
//     <>
//     <h1>Name : {props.name}</h1>
//     <h2>Last Name: {props.lastname}</h2>
//     <h2>Age : {props.age}</h2>
//     </>
//   )
// }



const API_URL = 'http://www.omdbapi.com?apikey=cbb6980f';
const movie1 = {
  Title
: 
"The Flash",
Type
: 
"series",
Year
: 
"2014–2023",
imdbID
: 
"tt3107288"

}

const App = () => {
  // const [counter, setCounter ] = useState(0);
  const [movies, setMovies ] = useState([]);
  const [searchTerm, setSearchTerm ] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} &s=${title}`);
    const data = await response.json();
    
    setMovies(data.Search);
  }
  // useEffect(()=> {
  //   alert('You changed it to '+counter);
  //   // setCounter(100);
  // }, [counter]);

  useEffect(() => {
    searchMovies('flash');
  }, []);

  return (
    <div className="App">
        <h1>MovieLand</h1>

        <div className="search">
          <input placeholder = "Search for movies" value={searchTerm} onChange={ (e) => setSearchTerm(e.target.value) } />
          <img src={SearchIcon} alt='search' onClick={ () => searchMovies(searchTerm) }/>

        </div>
        {
          movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie = {movie}/>
              ))}
              {/* <MovieCard movie1 = {movie1}/> */}
            </div>
          ) : (
            <div>
              <h2>No movies found</h2>
            </div>
          )
          
        }
        
         {/* <button onClick={() => setCounter((prevCount) => prevCount -1)}> - </button>
         <h1>{counter}</h1>
         <button onClick={() => setCounter((prevCount) => prevCount +1)}> + </button> */}
      {/* <Person name = {'John'} lastname = {'Doe'} age = {6}/>
      <Person name = {'Leakey'} lastname = {'Nyamweya'} age = {7}/> */}
      
      {/* {name ? (
        <>
         test
        </>
      ): (
        <>
          <h1>test</h1>
          <h2>Leakey</h2>
        </>
        
      )} */}
    </div>
  );
}

export default App;
