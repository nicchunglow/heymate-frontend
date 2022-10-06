import React from 'react';
import styled from 'styled-components';
import theme from 'constant/theme.constant';
import Card from 'components/Card';

const StyledWorkshopContainer = styled.div`
  background: ${theme.primaryWhite};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
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
    <StyledWorkshopContainer>
      <h1>Workshops</h1>
      {mockWorkShopData.map((workshop) => {
        return (
          <Card
            key={workshop?.id}
            aria-label={`workshop-${workshop?.id}`}
            justifyContent={'space-around'}
            background={theme.primaryOrange}
          >
            <h2>{workshop?.title}</h2>
            <span>
              <p>{workshop?.description}</p>
              <p>{workshop?.cost}</p>
            </span>
          </Card>
        );
      })}
    </StyledWorkshopContainer>
  );
};

export default Home;
