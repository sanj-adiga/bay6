import { Button, Input } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export default function Design() {
  return (
    <div>
      <h1>DESIGN</h1>
      <h2>Stay updated and follow our journey</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tortor at sapien euismod consectetur at eget ipsum. Nullam efficitur a nisi at placerat. Quisque fermentum ut velit et porttitor. Nunc vel rutrum enim, vel pretium tellus. Suspendisse vel ultricies libero, id auctor odio. Vestibulum rutrum sapien purus, nec pharetra mi consequat eget. Phasellus lectus elit, elementum in risus a, semper mollis eros. Integer quis quam a metus varius vestibulum. In eget ex nec nisi placerat sagittis. Ut at luctus leo. In hac habitasse platea dictumst.</p>
      
      <Image src={"/arrow"} alt='arrow' width={100} height={100}></Image> {/* get filler images*/}

    </div>
  )
}