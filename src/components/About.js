import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const About = () => {
  const query = graphql`
    query {
      contentfulPage {
        aboutUs {
          aboutUs
        }
      }
    }
  `
  return (
    <StaticQuery
      query={query}
      render={data => (
        <div>
          <h2 className="major">About</h2>
          <div>
            <p>{data.contentfulPage.aboutUs.aboutUs}</p>
          </div>
        </div>
      )}
    />
  )
}

export default About
