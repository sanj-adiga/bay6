import { Button, Input } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
      <h2>Stay updated and follow our journey</h2>

      <p>Email Address</p>
      <Input type="text" name="email" id="footer-email" placeholder="Enter your email" />
      <Button href={"/sections/about"}>Sign up</Button>{/* figure out navigation */}
      <Image src={"/arrow"} alt='arrow' width={100} height={100}></Image> {/* get filler images*/}

    </div>
  )
}


// Newsletter Email:
// bay6newsletter@gmail.com
// Password: bay6b*tch!