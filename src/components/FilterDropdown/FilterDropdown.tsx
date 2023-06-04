
import './FilterDropdown.css'

interface FilterDropdownProps {
  setSelection: (updateMovies: string) => void;
}

const FilterDropdown = ({setSelection} : FilterDropdownProps) => {

  const handleFilterChange = (option: string) => {
    console.log(option)
    setSelection(option);
  }
 
  return (
    <select onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="popular">Popular</option>
        <option value="top_rated">TopRated</option>
        <option value="upcoming">Upcoming</option>
    </select>
  )
}

export default FilterDropdown