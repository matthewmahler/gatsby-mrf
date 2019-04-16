import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Music = () => {
  const query = graphql`
    query {
      contentfulPage {
        spotifyUrl
      }
    }
  `
  return (
    <StaticQuery
      query={query}
      render={data => (
        <div>
          <h2 className="major">music</h2>

          <iframe
            title="spotify player"
            src={data.contentfulPage.spotifyUrl}
            allow="encrypted-media"
            className="player"
          />
        </div>
      )}
    />
  )
}

export default Music
