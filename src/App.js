import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import TabNavigation from './navigations/Tab';
// import ScreenLogin from './screens/login'
import StackNavigation from './navigations/Stack';
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
      {/* <TabNavigation /> */}
      {/* <ScreenLogin /> */}
    </NavigationContainer>
  );
};
//변경된 350
export default App;