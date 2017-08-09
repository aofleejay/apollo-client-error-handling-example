import { gql } from 'react-apollo'

const fetchAllImages = gql`
  query fetchAllImages {
    allImages {
      id
      url
    }
  }
`

export { fetchAllImages }
