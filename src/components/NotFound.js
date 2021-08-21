import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>Oops!</h1>
      <p>An error occured while processing your request!</p><p> Try again from the <Link to='/'>Home</Link>.</p>
      <img src='https://media.giphy.com/media/cWVlY0EeQZOrm/giphy.gif' alt="404 NotFound page" />
      

    </div>
  )
}