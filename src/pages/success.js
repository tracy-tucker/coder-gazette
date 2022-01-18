import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
const Success = () => {
  return (
    <Layout>
      <section className='success-page'>
        <div className='page-center'>
          <h2>Submission success!</h2>
          <Link to="/" className='btn'>
            back home
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Success


// Success page triggers once user completes newsletter form