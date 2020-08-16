import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  subTitle?: string;
  ctaText?: string;
  cta?: boolean;
  className: string;
}

const Title = ({ title, subTitle, cta, ctaText, className }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default styled(Title)``;
