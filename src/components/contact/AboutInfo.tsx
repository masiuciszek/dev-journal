import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

interface Props {
  on: boolean;
}
const StyledAbout = styled(animated.article)``;

const AboutInfo = ({ on }: Props) => {
  const { x } = useSpring({
    x: on ? 0 : 100,
  });

  return (
    <StyledAbout
      style={{ transform: x.interpolate(x => `translate3d(${x * 1}%,0,0)`) }}
    >
      <h1>AboutInfo</h1>
    </StyledAbout>
  );
};

export default AboutInfo;
