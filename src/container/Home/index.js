import { useQuery, gql } from '@apollo/client';
import React from 'react'

function Index(props) {
  const EXCHANGE_RATES = gql`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        title
        handle
        descriptionHtml
        id
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              price
              id
            }
          }
        }
      }
    }
  }
`;
  // console.log('I am working ==> ', props)
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  console.log(data)
  if (loading) console.log('Loading')
  if (error) console.log('Error')


  return (
    <div>
      This is is is Home
    </div>
  )
}

export default Index
