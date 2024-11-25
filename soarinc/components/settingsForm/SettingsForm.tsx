'use client'
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"

import { UserForm } from "./UserForm"
import Image from "next/image"
import { useRef, useState } from "react"


type CardProps = React.ComponentProps<typeof Card>

export function SettingsForm({ className, ...props }: CardProps) {
  const [tab, setTab] = useState<number>(1);
  const [image, setImage] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); 
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      const validTypes = ["image/jpeg", "image/png"];
      if (!validTypes.includes(file.type)) {
        alert("Only JPG and PNG files are allowed.");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        setImage(base64String);
      };
      reader.onerror = () => {
        console.error("File could not be read!");
      };
      reader.readAsDataURL(file); 
    }
    }
  

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
          tab === 1 ?
            <div className="">
              <Image src="/assets/images/profile.svg" width={100} height={100} alt="profile-image" className="mx-auto mt-[45px] mb-4 cursor-pointer lg:m-0 lg:mb-auto"  onClick={handleImageClick}/>
              <input
                type="file"
                accept="image/jpeg, image/png"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
            </div>
            : <>  </>
        }
        {
          tab===1?<UserForm image={image}/>:tab===2?<>Preferences</>:tab===3?<>Security</>:""
        }
      </CardContent>
    </Card>
  )
}
