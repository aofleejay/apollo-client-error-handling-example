import React from 'react'
import { graphql, compose } from 'react-apollo'
import { Spin } from 'antd'
import { fetchAllImages as query } from '../queries/image'
import { createImage as mutation } from '../mutations/image'

const Gallery = props => {
  const onClick = () => {
    props.mutate().then((response) => {
      props.data.refetch()
    })
  }

  const { loading, error, allImages } = props.data
  if (loading) return <Spin size="large" />
  else if (error) return <div id="error">Error...</div>

  return (
    <div>
      { allImages.map(image => <img key={image.id} src={image.url} />) }
       <button onClick={onClick}>load</button> 
    </div>
  )
}

export default compose(
  graphql(mutation),
  graphql(query)
)(Gallery)
