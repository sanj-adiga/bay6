import React from 'react'
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

const page = () => {
  return ( 
    <div >
    <div className="flex justify-center items-center">
      <h1 className="font-serif">coming soon...</h1>
    </div>
    <h3 className="text-center">SIGN UP TO STAY UPDATED</h3>
    <div className="flex justify-center">
      <Input type="email" label="Email" placeholder="Enter your email" />
    </div>
    </div>
  )
}

export default page