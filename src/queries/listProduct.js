import gql from 'graphql-tag';

export default gql`
query getProducts{
    getProducts{
      price
      description
      id
      image_url
      title
    }
  }
  `
