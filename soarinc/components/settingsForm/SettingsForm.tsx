'use client'
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"

import { UserForm } from "./UserForm"
import Image from "next/image"
import { useState } from "react"


type CardProps = React.ComponentProps<typeof Card>

export function SettingsForm({ className, ...props }: CardProps) {
  const [tab, setTab] = useState<Number>(1);

    const activeClass="border-b-2 border-[#232323] text-[#232323]"
  return (
    <Card className={cn("w-[full] rounded-[25px] lg:min-h-[60vh]", className)} {...props}>
          <CardHeader className="border-b-2 space-y-0 mx-4 border-solid border-[#EBEEF2] mb-4 lg:mb-10 text-[#718EBF]">
              <div className="flex justify-between lg:justify-start lg:gap-9 w-full">
                <div className={`text-xs lg:text-sm font-medium pb-2 px-1 cursor-pointer ${tab===1?activeClass:""} `} onClick={()=>setTab(1)}>
                    Edit Profile
                </div>
                <div className={`text-xs lg:text-sm font-medium pb-2 px-1 cursor-pointer  ${tab===2?activeClass:""} `} onClick={()=>setTab(2)}>
                    Preferences
                </div>
                <div className={`text-xs lg:text-sm font-medium pb-2 px-1 cursor-pointer  ${tab===3?activeClass:""}`} onClick={()=>setTab(3)}>
                    Security
                </div>
              </div>
      </CardHeader>
      <CardContent className="lg:flex gap-2 lg:gap-11">
        {
          tab===1?<Image src="/assets/images/profile.svg" width={100} height={100} alt="profile-image" className="mx-auto mt-[45px] mb-4 cursor-pointer lg:m-0 lg:mb-auto" />:<>  </>
        }
          {/* <Image src="/assets/images/profile.svg" width={100} height={100} alt="profile-image" className="mx-auto mt-[45px] mb-4 cursor-pointer lg:m-0 lg:mb-auto" /> */}
        {
          tab===1?<UserForm />:tab===2?<>Preferences</>:tab===3?<>Security</>:""
        }
      </CardContent>
    </Card>
  )
}
