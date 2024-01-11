import React from 'react'
import { useUsersQuery } from '../redux/UsersSlice';

function Account() {
    const { data, error, isLoading, isSuccess } = useUsersQuery();
  return (
    <div className='account'>
        {
            isSuccess && data.map((element, value) => {
                return <div className="cardUser">
                    <h2>{element.name}</h2>
                    <h2>{element.surname}</h2>
                </div>
            } )
        }
        
    </div>
  )
}

export default Account