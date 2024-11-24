import React from 'react'
import { transactions } from './data'
import Image from 'next/image'

const Recents = () => {
  return (
   <div className="md:mt-5 lg:ml-4 xl:ml-0 xl:mt-0 ">
          <p className='text-md font-semibold lg:text-2xl text-left mt-6 lg:mt-0 mb-5'>Recent Transaction</p>
           <div className={`relative md:w-[350px] lg:h-[235px] rounded-2xl text-background py-[20px] md:px-[17px] bg-background `}>
            {
              transactions.map((transaction, index) => {
                return (
                  <div className={`flex items-center gap-3 ${index===1 ? 'py-3' : ''}`} key={index}>
                    <Image src={transaction.image} width={50} height={50} alt="card-image" />
                    <div className="text-left">
                      <p className="text-textDark font-medium text-sm">{transaction.name}</p>
                      <p className="text-sm text-[#718EBF]">{transaction.date}</p>
                    </div>
                    <div className={`ml-auto ${transaction.type==="debit"?"text-[#FF4B4A]":"text-[#41D4A8]"}`}>{transaction.amount}</div>
                  </div>
                )
              })
}
          </div>
        </div>
  )
}

export default Recents
