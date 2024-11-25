import { BarCharts } from '@/components/BarCharts'
import CreditCards from '@/components/CreditCards'
import { Employees } from '@/components/Employees'
import { LineCharts } from '@/components/LineCharts'
import { PieCharts } from '@/components/PieCharts'
import Recents from '@/components/Recents'
import React from 'react'

const page = () => {
  return (
    <div className='lg:bg-foreground text-primary w-full lg:pl-[278px] h-screen text-center mt-[128.8px] px-[25px] pt-5 lg:px-[40px] mx-auto xl:max-w-[1440px]'>
      <div className="xl:flex justify-between ">
        <CreditCards/>
        <Recents/>
      </div>
      <div className="xl:flex my-6 justify-between">
        <div className="xl:w-[65%]">
          <h3 className='text-md font-semibold lg:text-2xl text-left mb-5'>Weekly Activity</h3>
        <BarCharts />
        </div>
        <div className=" w-full xl:w-[30%] h-[full]">
         <p className='text-md font-semibold lg:text-2xl text-left mt-6 xl:mt-0 mb-5'>Expense Statistics</p>
           <PieCharts/>

        </div>
      </div>

      <div className="xl:flex mb-[40px] justify-between h-[340px]">

        <div className="">
        <h3 className='text-md font-semibold lg:text-2xl text-left mb-5'>Quick Transfer</h3>
          <Employees />      
        </div>

        <div className="xl:w-[515px] h-max-[full] md:mt-5 lg:ml-4 xl:mt-0 mb-[40px]">
          <h3 className='text-md font-semibold lg:text-2xl text-left mb-5'>Balance History</h3>
          <LineCharts />
        </div>
      </div>

    </div>
  )
}

export default page
