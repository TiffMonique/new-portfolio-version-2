import Styles from "../../styles/button.module.css";

export interface IButton {
  style: {
    fontSize: number | string;
    lineHeight: number | string;
    background: string;
    borderRadius: string;
    padding: string;
    boxShadow: string;
  };
}
interface ButtonProps {
  children: React.ReactNode;
  buttonStyle: IButton;
  className?: string;
}

function Button({ children, buttonStyle, className }: ButtonProps) {
  return (
    <button
      className={`${className} ${Styles.button}`}
      style={buttonStyle.style}
    >
      {children}
    </button>
  );
}

export default Button;
