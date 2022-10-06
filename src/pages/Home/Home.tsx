import React from 'react';
import styled from 'styled-components';
import theme from 'constant/theme.constant';
import Card from 'components/Card';

const StyledCardContainer = styled.div`
  background: ${theme.primaryWhite};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
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
      subDescription: '$30/pax',
    },
    {
      id: 3,
      title: 'Workshop 2',
      description: 'Waacking Beginner',
      subDescription: '$30/pax',
    },
  ];
  return (
    <StyledCardContainer>
      {mockWorkShopData.map((workshop) => {
        return (
          <Card
            key={workshop?.id}
            aria-label={`workshop-${workshop?.id}`}
            width="40vw"
            height="20vh"
            justifyContent={`space-around`}
            background={theme.primaryYellow}
            boxShadow={`5px 5px 10px ${theme.primaryGrey}`}
            margin="10px"
          >
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
