import { Button, Input } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect} from 'react'
import Embed from '../components/embed'




export default function Blog() {
  return (
    <div>
      <h2>Stay updated and follow our journey</h2>

      <p>Email Address</p>
      <Input>Enter your email</Input>
      <Button href={"/sections/about"}>Sign up</Button>{/* figure out navigation */}
      <div className="substack-post-embed">
        <p lang="en">Welcome to Bay6! by bay6</p>
        <p>where we're not your basic b****</p>
        <Link data-post-link href="https://bay6.substack.com/p/welcome">Read on Substack</Link>
        <Embed />
      </div>
    </div>
  )
}