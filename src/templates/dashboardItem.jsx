import React from 'react'

const DashboardItem = ({icon,stat,metric,name}) => {
  return (
    <div className='flex flex-col text-white font-poppins text-[12px] items-center leading-[22px]'>
    <img className='w-[25px] h-[25px]' src={icon} alt="water" />
    <div className='font-medium mt-[14px]'>{stat}{metric}</div>
    <div>{name}</div>
</div>
  )
}

export default DashboardItem