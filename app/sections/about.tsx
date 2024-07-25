import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div>
      <h2>ABOUT</h2>
      <h3>The brainchild of</h3>
      <div>
        <p>Masumi Vyas</p>
        <p>CO-FOUNDER</p>
        <Image src={"/"} alt='' width={500} height={500}></Image>
      </div>
      <div>
        <p>Arya Dixit</p>
        <p>CO-FOUNDER</p>
        <Image src={"/"} alt='' width={500} height={500}></Image>
      </div>
      
    </div>
  )
}