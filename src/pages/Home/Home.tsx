import React from 'react';
import Card from 'components/Card/Card';
import theme from 'constant/theme.constant';
const Home: React.FC = () => {
  return (
    <Card testId="home-container" height="100vh">
      <Card width="50%" height="10vh" background={theme.primaryYellow}></Card>
    </Card>
  );
};

export default Home;
