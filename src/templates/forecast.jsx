import React from 'react'

const Forecast = ({dt,icon,wind,temp}) => {
const date = new Date(dt * 1000)
  return (
    <>
    <div className='flex flex-col text-[#223645] font-poppins text-[14px] items-center'>
    <div className='font-medium'>{Math.round(temp)}<span className='ml-[2px]'>°</span></div>
    <img className='w-[48px] h-[48px] ' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
    <div className='text-[12px] font-light'>{(wind).toFixed(1)}Km/h</div>
    <div className='font-light font-poppins'>{date.toLocaleTimeString('sl-EU', {hour:'2-digit', minute:'2-digit'})}</div>
    </div>
    </>
    
  )
}

export default Forecast