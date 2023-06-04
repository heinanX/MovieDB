import "./MovieCard.css"
import MarkAsSeenBtn from '../MarkAsSeenBtn/MarkAsSeenBtn'
import { Movie } from '../MovieList/MovieList'

interface MovieCardProps {
  movie: Movie
}

function MovieCard(props: MovieCardProps) {

  return (
    <div className="MovieCard d-flex">
{/*       <h1>{props.movie.title}</h1>
      <h1>{ props.movie.id}</h1> */}
      
        <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt="" />
      
      <MarkAsSeenBtn />
    </div>
  )
}

export default MovieCard