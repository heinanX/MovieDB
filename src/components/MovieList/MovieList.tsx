import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import MovieCard from "../MovieCard/MovieCard";
import FilterDropdown from "../FilterDropdown/FilterDropdown";
import { apiKey } from "../../apiKey/apiKey";
import "./MovieList.css"

export interface Movie {
  id: number,
  title: string,
  poster_path: string,
}

function MovieList() {
  const [movies, setMovies] = useState<Movie[] | null >(null);
  //creates a state and a function to set value to state. Default value is 'popular'
  const [selected, setSelection] = useState<string>('popular');
  // By including the selected state as a dependency in the useEffect dependency array, I ensure that the effect is re-executed whenever the selected value changes, fetching movies with the updated URL.
  useEffect(() => {
      const fetchMovies = async () => {
          try {
              const res = await fetch(`https://api.themoviedb.org/3/movie/${selected}?api_key=${apiKey}`);
              const data = await res.json();
              setMovies(data.results);
              
          } catch(error) {
              console.log(error)
          }
      }
      fetchMovies()
  }, [selected]);

  const updateMovies = (updateMovies: string) => {
    setSelection(updateMovies);
  }

  return (
    <div>
      <FilterDropdown setSelection={updateMovies}/>
      <div className="MovieList-div d-flex">
      { movies?.map((movie) => 
        <NavLink key={movie.id} to={ `/${movie.id}`} >
        <MovieCard movie={movie} />
        </NavLink>
      ) }
      </div>
    </div>
  )
}

export default MovieList