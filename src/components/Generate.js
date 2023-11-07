import React from 'react'

function Generate(props) {

    const {checks, passLen, setPassword} = props

    const charSet = {
        'upper': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'lower' : 'abcdefghijklmnopqrstuvwxyz',
        'num' : '0123456789',
        'sym' : '!@#$%^&*()_+~`|}{[]\:;?><,./-=',
    }

    const handleGenerate = () => {
        const randomString = generateRandomString(passLen);
        setPassword(randomString)
    }

    function generateRandomString(len) {

        let result = '';
      
        for (let i = 0; i < len; i++) {
            const randomCheck = Math.floor(Math.random() * checks.length);
            const randomCharset = charSet[checks[randomCheck]]
            const randomIndex = Math.floor(Math.random() * (randomCharset.length));
            result += randomCharset[randomIndex];
        }
      
        return result;
      }



  return (
      <div className="w-full">
        <button
          className="text-yellow-400 bg-pink-600 w-full rounded-xl p-3 shadow-lg shadow-yellow-400  text-xl"
          onClick={handleGenerate} disabled={checks.length===0}
        >
          GENERATE PASSWORD
        </button>
      </div>
  )
}

export default Generate
