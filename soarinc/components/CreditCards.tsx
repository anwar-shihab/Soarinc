import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { cards } from './data'
import Image from 'next/image'

const CreditCards = () => {
  return (
    <div className="">
          <div className="flex justify-between items-center mb-5 ">
          <p className='text-md font-semibold lg:text-2xl'>My Cards</p>
          <p className='text-sm font-semibold lg:text-lg'>All Cards</p>
          </div>
        <Carousel className='md:hidden'>
            <CarouselContent className=''>
              {
                cards.map((card, index) => {
                  return (
                    <CarouselItem key={index} className={`relative ml-5 basis-3/4 lg:basis-2/2 h-[198px] lg:h-[235px] rounded-2xl text-background py-[20px] px-[17px] ${index % 2 === 1 ? 'bg-background border border-cardBorder' : 'bg-custom-gradient'}`}>
                      <div className={`flex justify-between items-center mb-6 ${index % 2 === 1 ? 'invert' : ''}`}>
                        <div className="inline">
                          <div className="text-normal font-lato text-xs text-left">Balance</div>
                          <div className="text-base font-semibold font-lato lg:text-lg text-left">${ card.balance }</div>
                        </div>
                        <div>
                          <Image src="/assets/images/Chip_Card.png" width={29} height={29} alt="card-image" />
                        </div>
                      </div>
                      <div className={`flex gap-14 ${index % 2 === 1 ? 'invert' : ''}`}>
                        <div className="inline">
                          <div className="text-normal font-lato text-xs text-left">CARD HOLDER</div>
                          <div className="text-base font-semibold font-lato lg:text-lg text-left">{card.name}</div>
                        </div>
                        <div className="inline">
                          <div className="text-normal font-lato text-xs text-left">VALID THRU</div>
                          <div className="text-base font-semibold font-lato lg:text-lg text-left">{card.valid}</div>
                        </div>
                      </div>


                      <div className={`absolute rounded-b-2xl h-25px px-[17px] flex justify-between items-center py-4 px-5 w-full left-0 bottom-0 ${index % 2 === 1 ? 'border border-cardBorder' : 'bg-custom-opacity-gradient'}`}>
                        <p className={`${index % 2 === 1 ? 'invert' : ''}`}>{card.number}</p>
                        <Image className={`${index % 2 === 1 ? 'invert' : ''}`} src="/assets/images/cate.svg" width={27} height={18} alt="card-type" />
                      </div>
                    </CarouselItem>
                  )
                })}
          </CarouselContent>
          </Carousel>

          <div className="hidden md:flex justify-between">
          {
                cards.map((card, index) => {
                  return (
                    <div key={index} className={`relative w-[350px]  h-[198px] lg:h-[235px] rounded-2xl text-background py-[20px] px-[17px] ${index % 2 === 1 ? 'bg-background border border-cardBorder ml-5' : 'bg-custom-gradient'}`}>
                      <div className={`flex justify-between items-center mb-6 ${index % 2 === 1 ? 'invert' : ''}`}>
                        <div className="inline">
                          <div className="text-normal font-lato text-xs text-left">Balance</div>
                          <div className="text-base font-semibold font-lato lg:text-lg text-left">${ card.balance }</div>
                        </div>
                        <div>
                          <Image src="/assets/images/Chip_Card.png" width={35} height={35} alt="card-image" />
                        </div>
                      </div>
                      <div className={`flex gap-14 ${index % 2 === 1 ? 'invert' : ''}`}>
                        <div className="inline">
                          <div className="text-normal font-lato text-xs text-left">CARD HOLDER</div>
                          <div className="text-base font-semibold font-lato lg:text-lg text-left">{card.name}</div>
                        </div>
                        <div className="inline">
                          <div className="text-normal font-lato text-xs text-left">VALID THRU</div>
                          <div className="text-base font-semibold font-lato lg:text-lg text-left">{card.valid}</div>
                        </div>
                      </div>


                      <div className={`absolute rounded-b-2xl h-25px px-[17px] flex justify-between items-center py-4 px-5 w-full left-0 bottom-0 ${index % 2 === 1 ? 'border border-cardBorder' : 'bg-custom-opacity-gradient'}`}>
                        <p className={`${index % 2 === 1 ? 'invert' : ''}`}>{card.number}</p>
                        <Image className={`${index % 2 === 1 ? 'invert' : ''}`} src="/assets/images/cate.svg" width={27} height={18} alt="card-type" />
                      </div>
                    </div>
                  )
                })}
          </div>
          
        </div>
  )
}

export default CreditCards
