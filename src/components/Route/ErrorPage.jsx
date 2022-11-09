import React from 'react'
import ReturnButton from '../ReturnButton'
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <main className="error-container">
      <div className="error-wrapper">
        <p className='error-code'>404 code</p>
        <h1>Page Not Found</h1>
        <p>Sorry, the page you are looking for doesn't exist.</p>
        <div className="error-buttons">
          <ReturnButton />
          <Link to="/" className="btn">
            Take me home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ErrorPage