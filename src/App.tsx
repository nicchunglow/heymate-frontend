import React from 'react';
import './App.css';
import Routes from 'routes';
import RootPage from 'components/Page';
import Header from 'components/Header';

const App: React.FC = () => {
  return (
    <RootPage testId="root-page">
      <Header />
      <Routes />
    </RootPage>
  );
};

export default App;
