import React from 'react'
import './NotFound.css'
import Button from '../../UI/Button/Button'

function NotFound() {
  return (
    <div className='holder'>
        <div>

        <h1>404 Page Not Found</h1>
        <p className='errorMessage'>Sorry, that page doesn't exist</p>
        <Button buttonStyle="btn--primary">Go back Home</Button>
        </div>
        
    </div>
  )
}

export default NotFound