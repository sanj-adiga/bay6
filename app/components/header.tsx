import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from 'next/image';


export default function Header() {
  return (
      <Navbar position="static">
        <NavbarBrand>
          <Link href={"#"}><Image src="/Bay6-logo.png" width={70} height={70}  alt="Bay 6 logo" /></Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href={"#"}>SHOP</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={"#"}>ABOUT</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={"#"}>MISSION</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={"#"}>DESIGN</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={"#"}>BLOG</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={"#"}>CONTACT</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

    )
}