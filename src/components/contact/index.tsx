import * as React from "react";
import AboutInfo from "./AboutInfo";
import SocialList from "./SocialList";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import useToggle from "../../hooks/useToggle";

interface Props {
  delay?: number;
}

const Grid = styled(animated.section)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  justify-items: center;
  margin: 3rem 0 2rem 0;
  grid-gap: 1em;
`;

const ContactComponents = ({ delay = 500 }: Props): JSX.Element => {
  const [on, toggleOn] = useToggle();

  const { opacity, y } = useSpring({
    opacity: on ? 1 : 0,
    y: on ? 0 : 100,
  });

  React.useEffect(() => {
    setTimeout(() => {
      toggleOn();
    }, delay);
  }, []);

  return (
    <Grid
      style={{
        opacity,
        transform: y.interpolate(y => `translate3d(0,${y * 1}%,0)`),
      }}
    >
      <SocialList on={on} />
      <AboutInfo on={on} />
    </Grid>
  );
};
export default ContactComponents;
