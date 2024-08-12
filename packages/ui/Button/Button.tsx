import { css } from "@emotion/react";

const Button = () => {
  return <button css={buttonStyle}>My Button</button>;
};

export default Button;

const buttonStyle = css({
  padding: "16px 24px",

  border: "none",
  backgroundColor: "red",

  fontSize: "24px",
});
