import { gql } from 'react-apollo'

const createImage = gql`
  mutation createImage {
    createImage(url: "http://lorempixel.com/200/300") {
      id
      url
    }
  }
`

export { createImage }
