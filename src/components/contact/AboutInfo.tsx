import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

interface Props {
  on: boolean;
}
const StyledAbout = styled(animated.article)`
  padding: 0.5m 1em;
  h3 {
    font-size: 2em;
    border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
  }
`;

const AboutInfo = ({ on }: Props) => {
  const { x } = useSpring({
    x: on ? 0 : 100,
  });

  return (
    <StyledAbout
      style={{ transform: x.interpolate(x => `translate3d(${x * 1}%,0,0)`) }}
    >
      <h3>AboutInfo</h3>
    </StyledAbout>
  );
};

export default AboutInfo;
