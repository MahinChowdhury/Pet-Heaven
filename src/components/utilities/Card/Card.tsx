import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

interface CardProps {
  png: React.FC;
  color: {
    backGround: string;
    boxShadow: string;
  };
  barValue: number;
  title: string;
  value: string;
  series: Array<{ data: number[] }>;
}

const Card: React.FC<CardProps> = (props) => {
  return <CompactCard param={props} />;
};

const CompactCard: React.FC<{ param: CardProps }> = ({ param }) => {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
};

export default Card;
