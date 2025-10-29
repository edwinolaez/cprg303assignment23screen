import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

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
        screenOptions={{
          tabBarActiveTintColor: '#25D366',
          tabBarInactiveTintColor: '#8E8E93',
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIconStyle: styles.tabBarIcon,
        }}
      >
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
        name="index"
        options={{
          title: 'Chats',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name={focused ? 'chat' : 'chat-outline'} color={color} size={focused ? 30 : 26} />
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
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    height: 70,
    paddingBottom: 8,
    paddingTop: 6,
    marginBottom: 2,
    borderTopWidth: 1,
    borderTopColor: '#E6E6EA',
  },
  tabBarLabel: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 2,
  },
  tabBarIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -2, // Adjust spacing between icon and text
  },
});




