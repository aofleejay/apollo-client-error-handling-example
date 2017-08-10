import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { Button } from 'antd'
import mutationState from 'react-apollo-mutation-state'
import Loading from './common/Loading'
import Error from './common/Error'
import { fetchAllImages as query } from '../queries/image'
import { createImage as mutation } from '../mutations/image'

class Gallery extends Component {
  createImageAndReFetch = () => {
    this.props.mutation.set({ loading: true })
    this.props.createImage({
      refetchQueries: [{ query }]
    })
    .then(response => {
      this.props.mutation.set({ loading: false, error: null })
    })
    .catch(error => {
      console.error(error)
      this.props.mutation.set({ loading: false, error })
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
            loading={this.props.mutation.loading}
            onClick={this.createImageAndReFetch}
          >
            Load more...
          </Button>
        </div>
      </div>
    )
  }
}

const withMutationState = mutationState()

export default withMutationState(compose(
  graphql(mutation, { name: 'createImage' }),
  graphql(query)
)(Gallery))
