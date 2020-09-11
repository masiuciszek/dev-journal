import * as React from "react";
import AboutInfo from "./AboutInfo";
import SocialList from "./SocialList";
import styled from "styled-components";
import useToggle from "../../hooks/useToggle";
import { StyledLink as Button } from "../styled/Buttons";
import { motion } from "framer-motion";

const Grid = styled(motion.section)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-items: center;
  margin: 6rem 0 3rem 0;
  grid-gap: 3rem;
  position: relative;
  ${Button} {
    position: absolute;
    top: -3em;
    width: 16em;
    font-size: 17px;
    cursor: pointer;
  }
`;

const ContactComponents = (): JSX.Element => {
  return (
    <Grid>
      <SocialList />
      <AboutInfo />
      <Button to="/posts">Posts</Button>
    </Grid>
  );
};
export default ContactComponents;
