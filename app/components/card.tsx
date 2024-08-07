import { motion, Variants } from "framer-motion";

interface Props {
  name: string;
  startCol: number;
  endCol: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8
    }
  }
};

const hue = (h: number) => `hsl(${h}, 50%, 85%)`; // 1st num = saturation, 2nd num = lightness

const Card: React.FC<Props> = ({ name, startCol, endCol }) => {
  const background = `linear-gradient(306deg, ${hue(startCol)}, ${hue(endCol)})`; // adjust input hues from array

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        {name}
      </motion.div>
    </motion.div>
  );
};

export default Card;
