import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_USERS } from './apollo/query'

const UserInfo = () => {
    const { loading, error, data } = useQuery(GET_USERS)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return data.users.map(({ id, name }) => (
        <div key={id}>
          <p>{name}</p>
        </div>
    ));
}

export default UserInfo