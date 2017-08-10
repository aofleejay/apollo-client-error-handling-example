import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Button } from 'antd'
import Loading from './common/Loading'
import Error from './common/Error'
import { fetchAllImages as query } from '../queries/image'

class Gallery extends Component {
  render() {
    const { loading, error, allImages } = this.props.data
    if (loading) return <Loading />
    else if (error) return <Error />

    return (
      <div>
        {
          allImages.map(image => <img key={image.id} src={image.url} />)
        }
      </div>
    )
  }
}

export default graphql(query)(Gallery)
