import styled from "styled-components";
import { above, handleFlex } from "../../utils/helpers";

interface PageProps {
  height?: string;
}

export const Page = styled.div<PageProps>`
  /* ${handleFlex("row", "space-between", "center")}; */
  /* height: ${({ height }) => (height ? height : "100%")}; */
  width: 100%;
  margin: 0 auto;
  ${above.small`
    max-width: ${props => props.theme.size.maxWidth};
  `}
`;
