import React from 'react';

const Profile = () => {
  return (
    <div className='flex flex-col items-start justify-center h-screen md:items-start'>
      <h3 className='text-xl md:ml-44 font-medium text-white ml-[120px] md:text-3xl'>
        Hello, <span className='text-xl font-medium text-yellow-300 md:text-3xl'>I'm</span>
      </h3>
      <h1 className='mx-auto text-4xl font-bold text-white md:ml-44 md:text-7xl'>Pathum Lakshan</h1>
    </div>
  );
};

export default Profile;
