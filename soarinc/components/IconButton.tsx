import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  src: string
  alt: string
  width: number
    height: number
  link: string
  text?: string
  style?: string
}

const IconButton = (props: Props) => {
  return (
      <div className={`flex`}>
      <Link href={props.link} className={`flex gap-2 items-center justify-center ${props.style}`}>
        <p className='text-background text-xs lg:text-base'>{ props.text }</p>
        <Image priority className='m-auto' src={props.src} alt={props.alt} width={props.width} height={props.height} objectFit="contain" />
      </Link> 
     </div>
  )
}

export default IconButton
