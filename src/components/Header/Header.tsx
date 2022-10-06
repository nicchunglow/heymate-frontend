import React from 'react';
import theme from 'constant/theme.constant';
import styled from 'styled-components';
import Menu from '../../assets/Header/menu.svg';
import Button from 'components/Button';

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
  flex-direction: row;
  background-color: ${(props) => props?.background || theme.primaryWhite};
  width: ${(props) => props?.width || '100%'};
  height: ${(props) => props?.height || '10vh'};
  color: ${(props) => props?.color || 'black'};
  margin: ${(props) => props?.margin || '0'};
  padding: ${(props) => props?.padding || '0'};
  justify-content: ${(props) => props?.justifyContent || 'center'};
  align-items: ${(props) => props?.alignItems || 'center'};
`;

const Header: React.FC = (props: HeaderProps) => {
  const { testId } = props;
  return (
    <HeaderDiv data-testid={testId || 'header-container'}>
      <HeaderDiv data-testid={testId || 'header-inner-container'} width="95%" justifyContent={'space-between'}>
        <h1>Hi User</h1>
        <Button>
          <img src={Menu} />
        </Button>
      </HeaderDiv>
    </HeaderDiv>
  );
};

export default Header;
