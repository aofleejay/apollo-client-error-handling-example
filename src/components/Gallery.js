import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { Spin, Button } from 'antd'
import { fetchAllImages as query } from '../queries/image'
import { createImage as mutation } from '../mutations/image'

class Gallery extends Component {
  createImageAndReFetch = () => {
    this.props.mutate()
    .then(response => {
      this.props.data.refetch()
    })
    .catch(error => {
      console.error(error)
    })
  }

  render() {
    const { loading, error, allImages } = this.props.data
    if (loading) return <Spin size="large" />
    else if (error) return <div>Error...</div>

    return (
      <div>
        { allImages.map(image => <img key={image.id} src={image.url} />) }
        <Button onClick={this.createImageAndReFetch}>Load more...</Button> 
      </div>
    )
  }
}

export default compose(
  graphql(mutation),
  graphql(query)
)(Gallery)
