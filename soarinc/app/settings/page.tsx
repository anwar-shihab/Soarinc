import { SettingsForm } from '@/components/settingsForm/SettingsForm'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className='lg:bg-foreground text-primary w-full lg:pl-[278px] h-screen text-center mt-[128.8px] px-[25px] pt-5 lg:px-[40px] mx-auto xl:max-w-[1440px]'>
      <SettingsForm/>
    </div>
  )
}

export default page