import React from 'react'
import EditUser from '../../../components/EditUser'
import { fetchUserById } from '../../../../api/users/get-user-by-id';

export default async function EditUserPage({ params }:
  {
    params: Promise<{ userId: string }>
  }
) {
  const { userId } = await params;
  const  user  = await fetchUserById(userId)

  if (!user){
    return <div>User not found</div>
  }

    return (
      <div>
        <EditUser user={user} />
      </div>
    )



}