import React from 'react'
import { useHistory } from 'react-router-dom'

export const About: React.FC = () => {
  const history = useHistory()

  return (
    <div className="container">
      <div className="mt5 textCenter">
        <h1>About</h1>
        <p className="mb3">Second page with go back button</p>
        <button
          type="button"
          className="btn btnPrimary"
          onClick={() => history.push('/')}
        >
          Go back
        </button>
      </div>
    </div>
  )
}
