import './FilterDropdown.css'

function FilterDropdown() {
  return (
    <select>
        <option value="popular">Popular</option>
        <option value="top-rated">TopRated</option>
        <option value="upcoming">Upcoming</option>
    </select>
  )
}

export default FilterDropdown