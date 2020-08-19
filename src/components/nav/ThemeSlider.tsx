import * as React from "react";
import styled from "styled-components";
import { below, handleFlex } from "../../utils/helpers";

interface Props {
  className: string;
  onHandleSetTheme: () => void;
  onTheme: Theme;
}

const MenuSlider: React.FC<Props> = ({
  className,
  onHandleSetTheme,
  onTheme,
}) => {
  return (
    <label className={className}>
      <span
        onClick={onHandleSetTheme}
        style={{
          transform: onTheme === "LIGHT" ? "translateX(4em)" : "translateX(5%)",
        }}
      >
        {" "}
        {onTheme === "DARK" ? "🌞" : "🌑"}{" "}
      </span>
    </label>
  );
};

export default styled(MenuSlider)`
  border-radius: 0.4rem;
  width: 7em;
  padding: 0;
  position: absolute;
  top: 1rem;
  right: 2rem;
  padding: 0.1rem;
  background: ${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.shadow.elevations[5]};
  border: 2px solid ${({ theme }) => theme.colors.button};
  span {
    border: 2px solid ${({ theme }) => theme.colors.button};
    background: ${({ theme }) => theme.colors.background};
    transition: ${({ theme }) => theme.transition.mainTransition};
    border-radius: 50%;
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    ${handleFlex("row", "center", "center")};
    cursor: pointer;
    z-index: 5;
    position: relative;
    &:active {
      transform: scale(2.1);
    }
    &:after {
      content: "";
      border-radius: 50%;

      width: 2rem;
      height: 2rem;
      position: absolute;
      &:active {
        border: 2px solid ${({ theme }) => theme.colors.button};
      }
    }
  }

  ${below.medium`
    top: 1.4rem;
    right: 6rem;

  `}
`;
