import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from 'next/image';


export default function Header() {
  return (
      <footer>
        <div className="footer-content">
        <div className="footer-subscribe">
          <p>Subscribe to news updates</p>
          <input type="text" name="email" id="footer-email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <div className="footer-social">
          <img src="/substack-icon.png" alt="substack" />
          <img src="/instagram-icon.png" alt="instagram" />
          <img src="/twitter-icon.png" alt="twitter" />
          <img src="/facebook-icon.png" alt="facebook" />
        </div>
        </div>
        <p className="footer-copyright">© Bay6 2024</p>
      </footer>

    );
}