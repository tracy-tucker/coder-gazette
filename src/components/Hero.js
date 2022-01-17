import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = ({showCoder}) => {
  return (
    <header className='hero'>
      {showCoder && (
        <StaticImage
          src="../assets/person.png"
          placeholder='blurred'
          className='hero-person'
          alt="coder"
        />
      )}
    </header>
  )
}

export default Hero

// Passing in the prop, showCoder.
// If showCoder is present, then coder image is visible