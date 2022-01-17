/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
// import Footer from './Footer'
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <Navbar toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    {/* <Footer></Footer> */}
     <main>{children}</main>
    </>
  )
}

export default Layout

// Creating a toggle functionality for both Navbar and Sidebar
// Passing toggle to both in order to open/close navbar and sidebar on smaller screen sizes
// Passing isOpen to Sidebar to create a dynamic className, depending on state