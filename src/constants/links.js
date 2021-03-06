import React from 'react'
import { Link } from 'gatsby'
const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/posts" className="page-link">
          Posts
        </Link>
        {children}
      </li>
      <li>
        <Link to="/newsletter" className="page-link">
          Newsletter
        </Link>
      </li>
      <li>
        <Link to="/post" className="page-link">
          Post
        </Link>
      </li>
    </ul>
  )
}

export default Links

// Instead of creating an array of links, these are hard-coded
// Passing in styleClass as a prop to specify classnames within the child component, that then get converted to a class attribute within that child component.