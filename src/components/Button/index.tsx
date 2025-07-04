import { useNavigate } from "react-router-dom";
import css from "./index.module.scss";

export const Button = ({
  width,
  text,
  to,
}: {
  width: string;
  text: string;
  to?: string;
}) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <button
      onClick={handleRedirect}
      className={css.button}
      style={{ width: width }}
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;
