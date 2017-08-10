import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Button } from 'antd'
import Loading from './common/Loading'
import Error from './common/Error'
import { fetchAllImages as query } from '../queries/image'

class Gallery extends Component {
  render() {
    return (
      <div>
        Gallery
      </div>
    )
  }
}

export default graphql(query)(Gallery)
