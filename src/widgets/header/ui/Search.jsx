import { useState } from "react";
import "../search.css"
const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='ser'>
      <div className={`searchbox ${isOpen ? 'open' : ''}`}>
        <input type="text" className=' input' placeholder="поиска.." />
        <button className="submit" onClick={toggleSearch}>
        </button>
      </div>
    </div>
  )
}

export default Search