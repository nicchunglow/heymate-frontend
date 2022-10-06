import theme from 'constant/theme.constant';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { device } from 'constant/device.constant';

type CardProps = {
  children: ReactNode;
  background?: string;
  color?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  m?: string;
  p?: string;
  justifyContent?: string;
  alignItems?: string;
  opacity?: string;
  float?: string;
  testId?: string;
};

const CardDiv = styled.div<CardProps>`
  border: none;
  display: flex;
  background-color: ${(props) => props?.background || theme.primaryWhite};
  box-shadow: ${(props) => props?.boxShadow};
  width: ${(props) => props?.width || '90%'};
  height: ${(props) => props?.height || '10vh'};
  border-radius: ${(props) => props?.borderRadius || '10px'};
  color: ${(props) => props?.color || 'black'};
  margin: ${(props) => props?.margin || '10px'};
  padding: ${(props) => props?.padding || '0 10px'};
  justify-content: ${(props) => props?.justifyContent || 'center'};
  align-items: ${(props) => props?.alignItems || 'center'};
  font-size: 0.5em;
  @media ${device?.mobileM} {
    width: ${(props) => props?.width || '90vw'};
    font-size: 0.7em;
  }
  @media ${device?.tablet} {
    width: ${(props) => props?.width || '90vw'};
    font-size: 1em;
  }
`;

const Card = (props: CardProps) => {
  const { children, testId } = props;
  return (
    <CardDiv data-testid={testId || 'card'} {...props}>
      {children}
    </CardDiv>
  );
};

export default Card;
