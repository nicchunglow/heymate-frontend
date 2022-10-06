import theme from 'constant/theme.constant';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

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
  background-color: ${(props) => props?.background || theme.primaryWhite};
  box-shadow: ${(props) => props?.boxShadow};
  width: ${(props) => props?.width || '100%'};
  height: ${(props) => props?.height || '56px'};
  border-radius: ${(props) => props?.borderRadius || '10px'};
  border: none;
  color: ${(props) => props?.color || 'black'};
  margin: ${(props) => props?.margin || '0'};
  padding: ${(props) => props?.padding || '0'};
  display: flex;
  justify-content: ${(props) => props?.justifyContent || 'center'};
  align-items: ${(props) => props?.alignItems || 'center'};
  float: ${(props) => props?.float};
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
