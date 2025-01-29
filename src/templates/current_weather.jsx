import React,{useState,useEffect} from 'react'
import { use } from 'react'

const Current_weather = ({temp, weatherState,feel,description}) => {
  
  return (<>
    <div className=''>
      <div className='text-[200px] leading-[160px] uppercase font-poppins font-normal text-[#223645] flex items-center'>{Math.round(temp)}
        <div className='flex-col flex relative bottom-[25px]'>
          <span className='text-[100px] leading-[10px] font-medium relative bottom-[20px]'>°</span>
          <span className='text-[19px] leading-[10px] lowercase font-light capitalize'>{weatherState}</span>
        </div>
      </div>
      <div className='font-poppins text-[#223645] leading-[22px] text-[14px]'>
        Now it feels like {Math.round(feel)}°, actually {Math.round(temp)}° 
        <br />because of the {description} </div>
    </div>
  </>
  )
}

export default Current_weather