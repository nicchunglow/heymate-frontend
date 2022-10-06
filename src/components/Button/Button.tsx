import theme from 'constant/theme.constant';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode;
  border?: string;
  testId?: string;
};

const StyledButton: React.FC = styled.button<ButtonProps>`
  border: none;
`;

const Button = (props: ButtonProps) => {
  const { children, testId } = props;
  return (
    <StyledButton data-testid={testId || 'button'} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
