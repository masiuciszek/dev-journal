import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

interface Props {
  on: boolean;
}

const StyledSocial = styled(animated.article)``;

const SocialList = ({ on }: Props) => {
  const { x } = useSpring({
    x: on ? 0 : 100,
  });
  return (
    <StyledSocial
      style={{ transform: x.interpolate(x => `translate3d(${x * -1}%,0,0)`) }}
    >
      <h1>SocialList</h1>
    </StyledSocial>
  );
};

export default SocialList;
