import React from 'react'
import spinner from '../components/spinner.gif'

function Spinner() {
  return (
    <div>
       <img src={spinner} className="spinnerImg" alt="Loading..." />
    </div>
  )
}

export default Spinner
