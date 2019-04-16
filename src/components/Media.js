import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const query = graphql`
  query {
    allInstagramContent(limit: 10) {
      edges {
        node {
          link
          type
          videos {
            standard_resolution {
              url
            }
          }
          images {
            standard_resolution {
              url
            }
          }
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
            {data.allInstagramContent.edges.map((edge, i) =>
              edge.node.videos == null ? (
                <div key={i} className="insta-container">
                  <a href={edge.node.link}>
                    <img
                      src={edge.node.images.standard_resolution.url}
                      alt=""
                    />
                  </a>
                </div>
              ) : (
                <div key={i} className="insta-container">
                  <a href={edge.node.link}>
                    <video
                      src={edge.node.videos.standard_resolution.url}
                      controls={true}
                    />
                  </a>
                </div>
              )
            )}
          </div>
        )}
      />
    </div>
  )
}

export default Media
