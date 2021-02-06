import React,{useState} from 'react'

function TestButton() {

  const [value,setValue] = useState("Click Me!");

  const handleClick = () => {
    setValue("Clicked!")
  }
  

  return (
    <button  
      className="p-2 border-solid border-4 border-light-blue-500 rounded " 
      onClick={handleClick} 
      title="testButton"
    >
      {value}
    </button>
  )

}

export default TestButton
