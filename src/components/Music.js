import React from 'react'

const Music = () => {
  return (
    <div>
      <h2 className="major">music</h2>

      <iframe
        title="spotify player"
        src="https://open.spotify.com/embed/artist/6Yrv6ZL411qrv2uboAmyAK"
        allow="encrypted-media"
        className="player"
      />
    </div>
  )
}

export default Music
