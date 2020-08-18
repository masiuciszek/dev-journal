import * as React from "react";
import styled from "styled-components";

interface Props {
  className: string;
}

const MenuSlider: React.FC<Props> = ({ className }) => {
  return (
    <label className={className}>
      <h1> Legia CWSKS </h1>
    </label>
  );
};

export default styled(MenuSlider)``;
