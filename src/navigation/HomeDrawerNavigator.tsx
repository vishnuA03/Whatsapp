import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import UpdatesScreen from '../screens/UpdatesScreen';
import CommunitiesScreen from '../screens/CommunitiesScreen';

export type HomeDrawerParamList = {
  Updates: undefined;
  Communities: undefined;
};

const Drawer = createDrawerNavigator<HomeDrawerParamList>();

const HomeDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Updates" component={UpdatesScreen} />
      <Drawer.Screen name="Communities" component={CommunitiesScreen} />
    </Drawer.Navigator>
  );
};

export default HomeDrawerNavigator;
