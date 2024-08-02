import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import localFont from 'next/font/local'

const gistesy = localFont({src: '../ui/Gistesy.ttf'})

export default function About() {
  return (
    <div id='about'>
      <h2 >ABOUT</h2>
      <h3>The brainchild of</h3>
      <div>
        <h3 className={gistesy.className}>Masumi Vyas</h3>
        <p>CO-FOUNDER</p>
        <Image src={"/"} alt='' width={500} height={500}></Image>
      </div>
      <div>
        <h3 className={gistesy.className}>Arya Dixit</h3>
        <p>CO-FOUNDER</p>
        <Image src={"/"} alt='' width={500} height={500}></Image>
      </div>
      
    </div>
  )
}