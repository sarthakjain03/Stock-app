import React, { useState } from "react";
import { TextField } from "@mui/material";
import { stockSearch } from "../apis";
import axios from "axios";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleQueryChange = (event) => {
    setSearchQuery(event.target.value)
    // console.log(searchQuery)
  }

  const handleKeyPress = (event) => {
    // keyCode for the Enter key is 13.
    if(event.keyCode === 13){
        // console.log('Entered: ', searchQuery)
    }
  }

  return (
    <div className="mt-4 w-[85%]">
      <TextField 
        fullWidth 
        id="search-bar" 
        label="Search" 
        variant="outlined" 
        value={searchQuery}
        onChange={handleQueryChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default SearchBar;
