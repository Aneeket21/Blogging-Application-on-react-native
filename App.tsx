
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

//import auth from '@react-native-firebase/auth'

import Login from './screens/auth/Login'
import Register from './screens/auth/Register'
import Home from './screens/main/Home'
import CreateBlog from './screens/main/CreateBlog'
import Blog from './screens/main/Blog'

const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator()

export default function App() {

  const [loggedIn, setLoggedIn]  = useState(false)
  const [loading, setLoading] = useState(false)

  if(loading) {
    return (
      <ActivityIndicator
        size={32}
        color='gray'
      />
    )
  }

  if(!loggedIn) {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Login' component={Login} />
          { <Tab.Screen name='Register' component={Register} /> }
        </Tab.Navigator>
      </NavigationContainer>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='CreateBlog' component={CreateBlog} />
        <Stack.Screen name='Blog' component={Blog} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}