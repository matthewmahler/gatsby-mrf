import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Background from '../components/Background'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      })
    }, 350)
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
      })
    }, 350)
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle()
      }
    }
  }

  render() {
    const query = graphql`
      query {
        contentfulPage {
          title
          subtitle
          callToAction
          icon {
            file {
              url
            }
          }
          backgroundImages {
            fluid {
              src
            }
          }
        }
      }
    `
    return (
      <StaticQuery
        query={query}
        render={data => (
          <Layout location={this.props.location}>
            <div
              className={`body ${this.state.loading} ${
                this.state.isArticleVisible ? 'is-article-visible' : ''
              }`}
            >
              <div id="wrapper">
                <Header
                  onOpenArticle={this.handleOpenArticle}
                  timeout={this.state.timeout}
                  title={data.contentfulPage.title}
                  subtitle={data.contentfulPage.subtitle}
                  callToAction={data.contentfulPage.callToAction}
                  icon={data.contentfulPage.icon.file.url}
                />
                <Main
                  isArticleVisible={this.state.isArticleVisible}
                  timeout={this.state.timeout}
                  articleTimeout={this.state.articleTimeout}
                  article={this.state.article}
                  onCloseArticle={this.handleCloseArticle}
                  setWrapperRef={this.setWrapperRef}
                />
                <Footer timeout={this.state.timeout} />
              </div>
              <Background bgAll={data.contentfulPage.backgroundImages} />
            </div>
          </Layout>
        )}
      />
    )
  }
}

export default IndexPage
