import React,{useState} from 'react'

function SearchInput() {

  const [inputValue,setInputValue] = useState("");
  
  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <input 
      className="border-solid border-4 border-light-blue-500 "
      type="text"
      title="dummySearch"
      onChange={handleChange}
    ></input>
  )
}

export default SearchInput
