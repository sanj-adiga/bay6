import Image from 'next/image'
import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Header from './components/header';
import Welcome from './components/welcome';
import About from './sections/about';
import Mission from './sections/mission';
import Design from './sections/design';
import Blog from './sections/blog';
import Contact from './sections/contact';

export default function Home() {
  return (
    <div>
      <Header/>
      <Welcome/>
      <About/>
      <Mission/>
      <Design/>
      <Blog/>
      <Contact/>
    </div>
  )
}
