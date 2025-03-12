import React from 'react'
import  Usercard  from './Usercard.jsx'
export const Dashboard = () => {
    const users =[
        {
            name: 'John Doe',
            email: 'hello@gmail,com',
            age: 25
        },
        {
            name: 'John Doe',
            email: 'hello@gmail,com',
            age: 25
        },
        {
            name: 'Jerry Doe',
            email: 'jerryo@gmail,com',
            age: 75
        },
        {
            name: 'ramn Doe',
            email: 'jacklo@gmail,com',
            age: 55
        },
        {
            name: 'aman Doe',
            email: 'yoyo@gmail,com',
            age: 25
        },
        
    ]
  return (<>
    <div className='p4'>
        <h1 className='text-2xl mb-4'>Dashboard</h1>
        <div className='grid grid-cols-3 gap-4'>
        {users.map((user, index) => (
          <Usercard key={index} {...user} />
        ))}
           
        </div>
    </div>
    </>
  )
}
