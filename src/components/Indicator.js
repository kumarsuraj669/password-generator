import React, {useEffect, useState} from 'react'

function Indicator(props) {

  const [indicator, setIndicator] = useState('gray')

  useEffect(()=>{
    handleIndicator(props.length)
  }, [props.length])

  const handleIndicator = (len) => {
    if (len < 5) {
      setIndicator('red');
    } else if (len < 9) {
      setIndicator('blue');
    } else {
      setIndicator('green');
    }
  };


  return (
      <div className="flex justify-between w-full items-center">
          <span className='text-xl text-white'>Strength</span>
          <div className={`rounded-[50%] bg-${indicator}-400 blur-sm w-5 h-5`}></div>
      </div>
  )
}

export default Indicator
