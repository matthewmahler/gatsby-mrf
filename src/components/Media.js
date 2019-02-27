import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const query = graphql`
  query {
    allInstaNode {
      edges {
        node {
          id
        }
      }
    }
  }
`

const Media = () => {
  return (
    <div>
      <h2 className="major">media</h2>

      <StaticQuery
        query={query}
        render={data => (
          <div className="media-grid">
            {data.allInstaNode.edges.map((edge, i) => (
              <div key={i} className="iframe-container">
                <iframe
                  title={edge.node.id}
                  className="post"
                  src={`https://instagram.com/p/${edge.node.id}/embed`}
                  frameborder="0"
                />
              </div>
            ))}
          </div>
        )}
      />
    </div>
  )
}

export default Media
