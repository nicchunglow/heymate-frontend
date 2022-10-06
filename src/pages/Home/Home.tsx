import React from 'react';
import styled from 'styled-components';
import theme from 'constant/theme.constant';
import Card from 'components/Card';
import { device } from 'constant/device.constant';

const StyledCardContainer = styled.div`
  background: ${theme.primaryWhite};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;
const Home: React.FC = () => {
  const mockWorkShopData = [
    {
      id: 1,
      title: 'Workshop 1',
      description: 'Hip Hop Beginner',
      cost: '$30/pax',
    },
    {
      id: 2,
      title: 'Workshop 2',
      description: 'Waacking Beginner',
      cost: '$30/pax',
    },
    {
      id: 3,
      title: 'Workshop 3',
      description: 'Waacking Beginner',
      cost: '$30/pax',
    },
  ];
  return (
    <StyledCardContainer>
      {mockWorkShopData.map((workshop) => {
        return (
          <Card
            key={workshop?.id}
            aria-label={`workshop-${workshop?.id}`}
            justifyContent={`space-around`}
            background={theme.primaryYellow}
            boxShadow={`5px 5px 10px ${theme.primaryGrey}`}
          >
            <img src="https://picsum.photos/50" />
            <h1>{workshop?.title}</h1>
            <span>
              <p>{workshop?.description}</p>
              <p>{workshop?.cost}</p>
            </span>
          </Card>
        );
      })}
    </StyledCardContainer>
  );
};

export default Home;
