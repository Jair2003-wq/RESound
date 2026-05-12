import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import BottomBar from '../../components/bottombar';
import Profile from '@/components/ui/profile';

export default function TabLayout() {
  return(
    <View style={{flex:1}}>
      <Tabs screenOptions={{
        headerShown:false,
        tabBarStyle:{display:'none'}

      }}/>
      <BottomBar/>
      <Profile/>

    </View>

  );


}
