import React from 'react'


const Usercard = ({name, email, age}) => {
  return (
    <div  className='border rounded-lg p-4 shadow-lg bg-white m-2'>
        <h2 className='text-xl font-bold'> {name}</h2>
        <p className="text-gray-700">Email: {email}</p>
      <p className="text-gray-700">Agee: {age}</p>
    </div>
  );
};
export default Usercard
