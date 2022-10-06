import React from 'react';
import theme from 'constant/theme.constant';
import styled from 'styled-components';
import Menu from '../../assets/Header/menu.svg';
import Button from 'components/Button';
import { device } from 'constant/device.constant';

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
  @media ${device?.mobileM} {
    width: ${(props) => props?.width || '90vw'};
    font-size: 20px;
  }
  @media ${device?.tablet} {
    width: ${(props) => props?.width || '100vw'};
    h2 {
      font-size: 20px;
    }
  }
`;

const Header: React.FC = (props: HeaderProps) => {
  const { testId } = props;
  return (
    <HeaderDiv data-testid={testId || 'header-container'}>
      <HeaderDiv data-testid={testId || 'header-inner-container'} width="95%" justifyContent={'space-between'}>
        <h2>Hi User</h2>
        <Button>
          <img src={Menu} width="30px" />
        </Button>
      </HeaderDiv>
    </HeaderDiv>
  );
};

export default Header;
