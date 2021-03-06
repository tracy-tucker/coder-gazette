import React from "react"
import {
  FaTwitterSquare,
  FaMedium,
  FaGithubSquare,
} from "react-icons/fa"
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://twitter.com/mapTracy">
          <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
        </a>
      </li>
      <li>
        <a href="https://medium.com/@tracy-tucker">
          <FaMedium className="social-icon medium-icon"></FaMedium>
        </a>
      </li>
      <li>
        <a href="https://github.com/tracy-tucker">
          <FaGithubSquare className="social-icon github-icon"></FaGithubSquare>
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks

// Passing in styleClass as prop for the CSS classname