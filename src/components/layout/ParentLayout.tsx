import * as React from "react";
import SiteProvider from "../../context/site/Site.provider";

const ParentLayout: React.FC = ({ children }) => {
  return <SiteProvider>{children}</SiteProvider>;
};
export default ParentLayout;
