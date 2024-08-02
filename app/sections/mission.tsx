import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React , { createContext, useContext, useState }from 'react'
import "../globals.css";
import { motion, Variants } from "framer-motion";

interface MyComponentProps {
  isVisible: boolean;
}


const MyComponent: React.FC<MyComponentProps> = ({ isVisible }) => (
  <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
);

export default MyComponent;

// interface Props {
//   title: string;
//   hueA: number;
//   hueB: number;
// }

// const cardVariants: Variants = {
//   offscreen: {
//     y: 300
//   },
//   onscreen: {
//     y: 50,
//     rotate: -10,
//     transition: {
//       type: "spring",
//       bounce: 0.4,
//       duration: 0.8
//     }
//   }
// };

// const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

// function Card({ title, hueA, hueB }: Props) {
//   const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

//   return (
//     <motion.div
//       className="card-container"
//       initial="offscreen"
//       whileInView="onscreen"
//       viewport={{ once: true, amount: 0.8 }}
//     >
//       <div className="splash" style={{ background }} />
//       <motion.div className="card" variants={cardVariants}>
//         {title}
//       </motion.div>
//     </motion.div>
//   );
// }

// const info: [string, number, number][] = [
//   ["About", 340, 10],
//   ["Design", 20, 40],
//   ["Mission", 60, 90],
//   ["Origins", 80, 120],
//   ["Sustainability", 100, 140]
// ];

// function InfoCards() {
//   return (
//     <>
//       {info.map(([title, hueA, hueB]) => (
//         <Card title={title} hueA={hueA} hueB={hueB} key={title} />
//       ))}
//     </>
//   );
// }


// export default function Mission() {
//   return (
//     <div>
//       <h1>MISSION</h1>
//       <h4>...where we're not your basic b*tch</h4>
//       <p>A sustainable wardrobe collecction bringing forth slow fashion in today's fast-paced world.</p>
//       <Button href={"/sections/about"}>Learn more about our story!</Button>{/* figure out navigation */}
//       <Image src={"/arrow"} alt='arrow' width={100} height={100}></Image> {/* get arrow image for button*/}
//       <InfoCards/>

      

//     </div>
//   )
// }



