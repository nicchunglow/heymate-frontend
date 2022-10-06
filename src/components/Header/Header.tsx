import theme from 'constant/theme.constant';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

type HeaderProps = {
  background?: string;
  color?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  justifyContent?: string;
  alignItems?: string;
  testId?: string;
};

const HeaderDiv = styled.div<HeaderProps>`
  display: flex;
  background-color: ${(props) => props?.background || theme.primaryGrey};
  width: ${(props) => props?.width || '100%'};
  height: ${(props) => props?.height || '10vh'};
  color: ${(props) => props?.color || 'black'};
  margin: ${(props) => props?.margin || '0'};
  padding: ${(props) => props?.padding || '0'};
  justify-content: ${(props) => props?.justifyContent || 'center'};
  align-items: ${(props) => props?.alignItems || 'center'};
`;

const Header = (props: HeaderProps) => {
  const { testId } = props;
  return <HeaderDiv data-testid={testId || 'page'} {...props} />;
};

export default Header;
