import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { employees } from "./data"
import Image from "next/image"
import { Input } from "./ui/input"
import IconButton from "./IconButton"

export function Employees() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full bg-background py-6 lg:py-9 rounded-3xl px-[18px] lg:py-[25px] lg:px-[40px] radius-b-0"
    >
      <CarouselContent className="">
        {employees.map((person, index) => (
          <CarouselItem key={index} className="basis-[31.333%] border-0 shadow-none pl-0">
            <div className="">
              <Card className="border-0 shadow-none bg-transparent pl-1">
                <CardContent className=" bg-transparent flex flex-col  p-0 items-center lg:p-3">
                    <Image src={person.profile} width={70} height={70} alt="card-image" className="hidden lg:block" />
                    <Image src={person.profile} width={50} height={50} alt="card-image" className="lg:hidden" />
                        <p className="text-base font-normal mt-[12px] mb-[1px] lg:mt-[15px] lg:mb-[5px]">{person.name}</p>
                  <p className="text-sm font-normal text-[#718EBF] mb-[29px]">{person.designation}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
        <div className="flex text-[#718EBF] relative items-center mb-[42px] lg:mb-0 lg:pl-[25px]">
            <label className="text-sm lg:text-md">Write Amount</label>
            <Input type="text" placeholder="0.00" className="ml-auto min-w-[150px] w-[50%] lg:w-[75%] pr-[96px] lg:py-[25px] lg:px-[16px]  rounded-[50px] text-left custom-placeholder focus:outline-none focus:border-0 focus:shadow-none outline-none bg-[#EDF1F7] border-[#718EBF] text-[#718EBF] font-normal lg:text-base" />

            <div className="lg:hidden">
            <IconButton src="/assets/images/send.svg" alt="send-icon" width={16.11} height={14} link="/" style="bg-[#232323] absolute left-auto right-[0px] top-0 px-[20px] py-[12px] lg:px-[24px] lg:py-[14px] left-0 rounded-[50px]" text="Send"  />
            </div>
            <div className="hidden lg:block">
            <IconButton src="/assets/images/send.svg" alt="send-icon" width={26} height={22.6} link="/" style="bg-[#232323] absolute  left-auto right-[0px] top-0 px-[20px] py-[12px] lg:px-[24px] lg:py-[14px] left-0 rounded-[50px]" text="Send"  />
            </div>
          </div>
    </Carousel>
  )
}
