import * as React from "react";
import styled from "styled-components";

interface SocialItemData {
  name: SocialName;
  acount: string;
}
interface Props {
  onSocial: SocialItemData;
}

const StyledSocialItem = styled.a`
  display: block;
  font-size: 0.8em;
`;

const SocialItem = ({ onSocial }: Props) => {
  const { name, acount } = onSocial;
  const handleSocialItem = (name: SocialName) => {
    switch (name) {
      case "github":
        return "🐻";
      case "instagram":
        return "📸";
      case "twitter":
        return "🐧";
      default:
        return "🚀";
    }
  };

  return (
    <StyledSocialItem href={acount}>
      <h1>
        {onSocial.name} <span>{handleSocialItem(name)}</span>
      </h1>
    </StyledSocialItem>
  );
};
export default SocialItem;
