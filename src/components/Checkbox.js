import React from 'react'

function Checkbox(props) {

  let {checks, setChecks} = props

    const handleCheck = (e)=> {
        const value = e.target.value

        if(value){
          
          if(checks.includes(value)){
            // if the value is in the array, remove it
            setChecks((prevChecks) => prevChecks.filter((item) => item !== value))
          } else { 
            // If the value is not in the array, add it
            setChecks((prevChecks) => [...prevChecks, value]);
          }
        }
    }

  return (
    <div className="checkboxes flex flex-col space-y-2 w-full text-white text-xl">
          <label className='flex space-x-3 ' onClick={handleCheck} ><input type="checkbox" value="upper"/><span>Include Uppercase Letters</span></label>
          <label className='flex space-x-3 ' onClick={handleCheck} ><input type="checkbox" value="lower"/><span>Include Lowercase Letters</span></label>
          <label className='flex space-x-3 ' onClick={handleCheck} ><input type="checkbox" value="num"/><span>Include Numbers</span></label>
          <label className='flex space-x-3 ' onClick={handleCheck} ><input type="checkbox" value="sym"/><span>Include Symbols</span></label>
    </div>
  )
}

export default Checkbox
