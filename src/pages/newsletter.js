import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return (
    <Layout>
      <section className='newsletter-page'>
        <div className='page-center'>
          <h2>Receive blog releases in your inbox</h2>
          <h4>A new story is released once every month</h4>
          <form className='contact-form'>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className='form-control'
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className='form-control'
            />
            <button type="submit" className='btn form-control submit-btn'>
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
