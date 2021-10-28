import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './navigations/Tab';

const App = () => {
  return (
    <NavigationContainer>
      {/*<StackNavigation />*/}
      <TabNavigation />
    </NavigationContainer>
  );
};

export default App;