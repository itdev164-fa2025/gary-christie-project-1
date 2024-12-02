import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import { H1 } from '../components/Heading'

const BlogPost = ({ data}) => {
    const { title, body, heroImage,  consoles } = data.contentfulBlogPost

    return (
        <Layout>
            <GatsbyImage
                image={heroImage.gatsbyImageData} 
            />
            <H1>{title}</H1>
            <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></div>
            <p>{consoles}</p>
        </Layout>
    )
}

export default BlogPost;

export const pageQuery = graphql`
    query blogPostQuery($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
             title
            slug
            consoles
          body{
          	childMarkdownRemark{
              html
            }
          }
        heroImage {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 960
              

              
            )
        }
    }
       
  }
`
