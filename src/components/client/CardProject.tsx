import Button, { IButton } from "./Button.tsx";
import Styles from "../../styles/cardProject.module.css";

const buttonStyle: IButton = {
  style: {
    fontSize: "14px",
    lineHeight: "17px",
    background:
      "linear-gradient(263.55deg, #891DF5 44.92%, rgba(137, 29, 245, 0) 165.97%)",
    borderRadius: "3.05455px",
    padding: "13.7455px 28.2545px",
    boxShadow:
      "inset 0px 9.16364px 3.05455px rgba(251, 247, 255, 0.12), inset 0px 3.81818px 4.58182px rgba(255, 255, 255, 0.25)",
  },
};

export interface ICardProject {
  children: React.ReactNode;
  className: string | string[];
  onClick: (index: number) => void;
  index: number;
}

function CardProject({ children, className, onClick, index }: ICardProject) {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <div className={`${Styles.card} ${className}`} onClick={handleClick}>
      <div className={`${Styles.title}`}>{children}</div>
      <Button buttonStyle={buttonStyle}>View Demo</Button>
    </div>
  );
}

export default CardProject;
