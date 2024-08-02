import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import localFont from 'next/font/local'

const gistesy = localFont({src: '../ui/Gistesy.ttf'})


export default function Welcome() {
  return (
    <div>
      <h1 className={gistesy.className}>Welcome to Bay6!</h1>
      <h4>...where we're not your basic b*tch</h4>
      <p>A sustainable wardrobe collecction bringing forth slow fashion in today's fast-paced world.</p>
      <Button href={"/sections/about"}>Learn more about our story!</Button>{/* figure out navigation */}
      <Image src={"/arrow"} alt='arrow' width={100} height={100}></Image> {/* get arrow image for button*/}
      
    </div>
  )
}