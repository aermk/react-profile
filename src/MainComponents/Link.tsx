import React, { FC } from "react";
import styled from "styled-components";

export interface ILinkProps {
  url: string;
  text?: string;
  onClick?: () => void;
  target?: string;
  children?: React.ReactNode;
  className?: string;
  title: string;
}

const StyledLink = styled.a`
  width: 48px;
  height: 48px;
  display: inline-block;
  margin-right: 4px;
  margin-left: 4px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Link: FC<ILinkProps> = ({
  target = "_blank",
  url,
  text,
  onClick = (): void => undefined,
  children,
  className,
  title,
}) => {
  const linkLabel = text || url;

  return (
    <StyledLink
      target={target}
      href={url}
      onClick={onClick}
      className={className}
      title={title}
    >
      {children || linkLabel}
    </StyledLink>
  );
};

export { Link };
