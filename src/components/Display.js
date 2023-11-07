import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

function Display(props) {

  const [isCopied, setCopied] = useState(false)


  const handleCopy = ()=>{
    var copyText = props.password;
    navigator.clipboard.writeText(copyText);
    
    setCopied(true)
    setTimeout(()=>{
      setCopied(false)
    }, 2000)

  }

  return (
    <>
    <div className='w-full'>
        <div className='custom-shadow flex justify-between items-center relative custom-bg p-5 rounded-2xl text-yellow-400'>
          <h1 id="display-content" className='text-2xl font-semibold'>{props.password}</h1>
          
          <FontAwesomeIcon className="h-6 cursor-pointer" icon={faCopy} style={{color: "#23b2e1",}} onClick={handleCopy}/>
          {isCopied && (
            <div className='bg-purple-600 text-white rounded-lg p-2' style={{ position: 'absolute', top: '-20px', right: '0' }}>
              Copied
            </div>
          )}
          
        </div>
    </div>
    </>
  )
}

export default Display
