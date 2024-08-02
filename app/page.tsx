import Image from 'next/image'
import React, { createContext, useEffect} from 'react'
import { motion, Variants } from "framer-motion";
import Welcome from './components/welcome';
import About from './sections/about';
import Mission from './sections/mission';
import Design from './sections/design';
import Blog from './sections/blog';
import Contact from './sections/contact';

export default function Home() {
  return (
    <div>
      <Welcome/>
      <About/>
      <Mission isVisible={false}/>
      <Design/>
      <Blog/>
      <Contact/>
    </div>
  )
}
