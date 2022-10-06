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

const PageDiv = styled.div<CardProps>`
  display: flex;
  background-color: ${(props) => props?.background || theme.primaryWhite};
  width: ${(props) => props?.width || '100%'};
  height: ${(props) => props?.height || '100vh'};
  color: ${(props) => props?.color || 'black'};
  margin: ${(props) => props?.margin || '0'};
  padding: ${(props) => props?.padding || '0'};
  justify-content: ${(props) => props?.justifyContent || 'center'};
  align-items: ${(props) => props?.alignItems || 'center'};
`;

const Page = (props: CardProps) => {
  const { children, testId } = props;
  return (
    <PageDiv data-testid={testId || 'page'} {...props}>
      {children}
    </PageDiv>
  );
};

export default Page;
