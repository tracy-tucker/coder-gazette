import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const IndexPage = ({data}) => {
  // Destructuring the data result
  const {
    allMdx: { nodes:posts }
  } = data
  return (
    <Layout>
      <Hero showCoder/>
      <Posts posts={posts} title="recently published"/>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(limit: 3, sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        frontmatter {
          title
          author
          category
          readTime
          slug
          date(formatString: "MMMM, Do YYYY")
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt
      }
    }
  }
`

export default IndexPage

// Querying Gatsby nodes, then destructuring the data result to pass in the posts props to the Posts Index Component.