import "./MovieDetails.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { apiKey } from "../../apiKey/apiKey"

interface MovieDet {
  title: string,
  tagline: string,
  genres: [],
  original_language: string,
  runtime: number,
  overview: string,
  poster_path: string,
}

function MovieDetails() {
  const [movieDet, setMovieDet] = useState<MovieDet | null >(null)

  const { id } = useParams()
 
  useEffect(() =>{
    const getMovieDetails = async () => {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      const data = await res.json()
      setMovieDet(data)

    } catch (error) {
      console.log(error)
    }
    }
    getMovieDetails()
  },[id])

  if (movieDet === null) {
    return <div>Loading...</div>;
  }

  return (
      <div className="MovieDetails-div d-flex">
        <img src={`https://image.tmdb.org/t/p/w500/${movieDet.poster_path}`} alt="John Wick Poster" />
        <div>
          <p style={{paddingBottom:'10px', display: 'inline'}}>{movieDet.runtime} min</p>
          <p style={{textTransform: 'uppercase', display: 'inline', paddingLeft: '10px'}}>{movieDet.original_language}</p>
          <h1 style={{paddingTop: '20px'}}>{movieDet.title}</h1>
          <p>{movieDet.tagline}</p>
          <p className="movie-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a impedit delectus provident recusandae esse, accusantium reiciendis ducimus facere magnam incidunt voluptatum quia libero est illo soluta architecto expedita neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aut voluptate? Et vero iure distinctio iusto culpa, architecto molestiae placeat sequi, dolore blanditiis, sapiente reprehenderit amet alias delectus aliquam animi?</p>
        </div>
      </div>

  )
}

export default MovieDetails