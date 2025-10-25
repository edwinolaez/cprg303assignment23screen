import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

// const TabLayout = () => {
//   return (
//     <View>
//       <Text>Tab Layout</Text>
//       <Iconify icon="mdi:home" />
//     </View>
//   )
// }

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: '#25D366', tabBarInactiveTintColor: '#8E8E93',headerShown: false, }} >
      <Tabs.Screen
        name="updates"
        options={{
          title: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="update" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='calls'
        options={{
          title: 'Calls',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="phone-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='communities'
        options={{
          title: 'Communities',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-group-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  )
}


