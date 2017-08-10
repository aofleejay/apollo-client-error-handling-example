import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { Button } from 'antd'
import Loading from './common/Loading'
import Error from './common/Error'
import { fetchAllImages as query } from '../queries/image'
import { createImage as mutation } from '../mutations/image'

class Gallery extends Component {
  state = {
    loading: false,
  }

  createImageAndReFetch = () => {
    this.setState({ loading: true })
    this.props.createImage({
      refetchQueries: [{ query }]
    })
    .then(response => {
      this.setState({ loading: false })
    })
    .catch(error => {
      console.error(error)
      this.setState({ loading: false })
    })
  }

  render() {
    const { loading, error, allImages } = this.props.data
    if (loading) return <Loading />
    else if (error) return <Error />

    return (
      <div>
        {
          allImages.map(image => <img key={image.id} src={image.url} />)
        }
        <div>
          <Button
            type="primary"
            loading={this.state.loading}
            onClick={this.createImageAndReFetch}
          >
            Load more...
          </Button>
        </div>
      </div>
    )
  }
}

export default compose(
  graphql(mutation, { name: 'createImage' }),
  graphql(query)
)(Gallery)
