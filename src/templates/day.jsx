import React, {useState,useEffect} from 'react'

const Day = ({datetime,timezone}) => {


  const dt = new Date((datetime + timezone) * 1000)
    
  return (
    <>
        <div className='flex justify-center'>
            <div className='bg-[#223645] px-5 py-1 rounded-2xl font-poppins text-[#99C1FB] flex gap-1'><div>{dt?.toLocaleDateString('en-EU', {timeZone: 'UTC',weekday: 'short' , day:'2-digit',month:'long' })}</div>
            <div>{dt?.toLocaleTimeString('en-EU',{timeZone: 'UTC',hour:'2-digit',minute:'2-digit'})}</div>
            </div>
            
        </div>
    </>
  )
}

export default Day