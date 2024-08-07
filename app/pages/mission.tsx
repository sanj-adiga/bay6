'use client';
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React , { createContext, useContext, useState }from 'react'
import "../globals.css";
import { color, motion, Variants } from "framer-motion";
import Card from '../components/card';

interface MyComponentProps {
  isVisible: boolean;
}

const info: [string, number, number][] = [ 
  ["Masumi", 350, 360],
  ["Design", 330, 340],
  ["Mission", 10, 10],
  ["Origins", 120, 140],
  ["Sustainability", 180, 240]
];






const Mission: React.FC = () => {
  return (
    <div>
      <h1>MISSION</h1>

      {info.map(([name, startCol, endCol]) => (
        <Card name={name} startCol={startCol} endCol={endCol} key={name} />
      ))}
      
    </div>
  );
};

export default Mission;




