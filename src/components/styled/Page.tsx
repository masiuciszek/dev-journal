import styled from "styled-components";
import { handleFlex } from "../../utils/helpers";

interface PageProps {
  height?: string;
}

export const Page = styled.div<PageProps>`
  /* ${handleFlex("row", "space-between", "center")}; */
  /* height: ${({ height }) => (height ? height : "100%")}; */
  max-width: ${props => props.theme.size.maxWidth};
  margin: 0 auto;
`;
