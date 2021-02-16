import { useQuery, gql } from '@apollo/client';
import React from 'react'

function Index(props) {
    const EXCHANGE_RATES = gql`
  query {
    students{
      name
    }
  }
`;

    // const { loading, error, data } = useQuery(EXCHANGE_RATES);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error :(</p>;
//     console.log(data)
console.log('I am working ==> ',props)

    return (
        <div>
           This is is is Home
        </div>
    )
}

export default Index
