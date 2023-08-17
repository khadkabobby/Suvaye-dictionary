import { useState } from "react";
import Search from "../assets/Search.svg";

const SearchInput = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');


  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleKeyDown=(event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch(searchTerm)
    }
  }
  return (
    <div className="w-[70%] mx-auto mt-16">
      <label htmlFor="inputSearch" className="w-6">
        <figure className="w-7 relative">
          <img src={Search} className="w-full absolute top-6 left-5" />
        </figure>
      </label>
      <input
        type="text"
        placeholder="Search . . ."
        className="w-full py-5 pl-16 bg-[#F1F4F7] border rounded-2xl text-black text-2xl"
        id="inputSearch"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchInput;
