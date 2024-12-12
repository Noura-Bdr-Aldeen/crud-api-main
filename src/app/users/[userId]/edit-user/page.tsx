import React from 'react'
import EditUser from '../../../components/EditUser'

export default async function EditUserPage({ params }:
  {
      params: {
          userId: number
      }
  }
){
  const { userId } = await params
  
  return (
    <div>
      <EditUser userId={userId}/>
    </div>
  )



}