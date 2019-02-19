import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import aboutPic from '../images/about.jpg'

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

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="music"
          className={`${this.props.article === 'music' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">music</h2>

          <iframe
            src="https://open.spotify.com/embed/artist/6Yrv6ZL411qrv2uboAmyAK"
            allowTransparency="true"
            allow="encrypted-media"
            className="player"
          />

          {close}
        </article>

        <article
          id="media"
          className={`${this.props.article === 'media' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">media</h2>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/PiVKO3NVkbA"
            frameborder="0"
          />
          <br />
          <br />
          <StaticQuery
            query={query}
            render={data =>
              console.log(data) || (
                <div>
                  <Carousel
                    showThumbs={false}
                    showArrows={true}
                    dynamicHeight={true}
                  >
                    {data.allInstaNode.edges.map((edge, i) => (
                      <div key={i}>
                        <iframe
                          className="post"
                          src={`http://instagram.com/p/${edge.node.id}/embed`}
                          frameborder="0"
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              )
            }
          />

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          } aboutSection`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur et adipiscing elit.
              Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac.
              Aliquam erat volutpat. Praesent urna nisi, fringila lorem et
              vehicula lacinia quam. Integer sollicitudin mauris nec lorem
              luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum
              primis in faucibus. Cras viverra ligula sit amet ex mollis mattis
              lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur et adipiscing elit.
              Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac.
              Aliquam erat volutpat. Praesent urna nisi, fringila lorem et
              vehicula lacinia quam. Integer sollicitudin mauris nec lorem
              luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum
              primis in faucibus. Cras viverra ligula sit amet ex mollis mattis
              lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur et adipiscing elit.
              Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac.
              Aliquam erat volutpat. Praesent urna nisi, fringila lorem et
              vehicula lacinia quam. Integer sollicitudin mauris nec lorem
              luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum
              primis in faucibus. Cras viverra ligula sit amet ex mollis mattis
              lorem ipsum dolor sit amet. Shut up Zach
            </p>
          </div>

          {close}
        </article>

        <article
          id="social"
          className={`${this.props.article === 'social' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">social</h2>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/myrisingfall?lang=en"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/MyRisingFall/"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/myrisingfallsucks/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>

          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
