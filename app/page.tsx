import Image from 'next/image'
import React, { createContext, useEffect} from 'react'
import { motion, Variants } from "framer-motion";
import Welcome from './components/welcome';
import Mission from './pages/mission';
import Design from './pages/design';
import Blog from './pages/blog';
import Contact from './pages/contact';

export default function Home() {
  return (
    <div>
      <Welcome/>
      <Mission/>
      <Design/>
      <Blog/>
      <Contact/>
    </div>
  )
}
