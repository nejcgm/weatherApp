import React from 'react'
import View from '../assets/view.png'
import Water from '../assets/water.png'
import Windicon from '../assets/wind.png'
import DashboardItem from './dashboardItem'

const Dashboard = ({humidity,wind,visibility}) => {
  return (
    <>
    <div className=' flex flex-col  place-self-center'>
        <div className='flex gap-[60px] bg-[#223645] rounded-xl pb-[18px] pt-[22px] px-[30px] shadow-md'>
        <DashboardItem icon={Water} stat={humidity} metric={'%'} name={'Humidity'}/>
        <DashboardItem icon={Windicon} stat={(wind).toFixed(1)} metric={'Km/h'} name={'Wind'}/>
        <DashboardItem icon={View} stat={(visibility/1000).toFixed(1)} metric={'Km'} name={'Visibility'}/>
        </div>
        <div className='bg-[#223645] h-[1px] mt-[30px]'></div>
    </div>
    
    </>
  )
}

export default Dashboard