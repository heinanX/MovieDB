import { Routes, Route } from "react-router-dom"
import MovieDetails from "../MovieDetails/MovieDetails"
import MovieList from "../MovieList/MovieList"
import About from "../About/About"
import Contact from "../Contact/Contact"

function Main() {
  return (
    <Routes>
    <Route path="/" element={<MovieList />} />
    <Route path="/:id" element={<MovieDetails />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />

  </Routes>
  )
}

export default Main