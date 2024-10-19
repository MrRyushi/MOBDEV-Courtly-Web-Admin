'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const CourtBtn = ({ index, court }) => {  
  const router = useRouter();  

  const handleClick = (court) => {
    router.push(`/reservations?court=${court}`);  
  };

  return (
    <div key={index} onClick={() => handleClick(court)} className='bg-second hover:bg-red-800 p-4 rounded-xl w-full text-slate-50'>
      <h1>
        <span className='font-bold'>{court}</span>
      </h1>
    </div>
  );
};

export default CourtBtn;
