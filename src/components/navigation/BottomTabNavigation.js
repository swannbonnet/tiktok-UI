import React from 'react'
import { Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from '../../screens/home/HomeScreen'
import SignUp from '../../screens/signup/SignUpScreen'

export default function BottomTabNavigation() {
   
    const Tab = createBottomTabNavigator();
    
    
    return (
        
        <Tab.Navigator tabBarOptions={{ 
            tabStyle:{
                backgroundColor: '#111111'
            },
            activeTintColor:'#FFFFFF'
        }}>
            <Tab.Screen name={"Home"} component={Home} options={{
                tabBarIcon:({color}) => ( <Entypo name={'home'} size={26} color={color} />)
            }}/>

            <Tab.Screen name={"Search"} component={Home} options={{
                tabBarIcon:({color}) => ( <AntDesign name={'search1'} size={26} color={color} />)
            }}/>

            <Tab.Screen name={"Upload"} component={Home}options={{
                tabBarIcon:({color}) => ( <Image source={require('../../assets/icon/plus-icon.png')} style={{height:35, resizeMode:'contain'}} />),
                tabBarLabel:() => null
            }}/>

            <Tab.Screen name={"Inbox"} component={Home}options={{
                tabBarIcon:({color}) => ( <MaterialCommunityIcons name={'message-minus-outline'} size={26} color={color} />)
            }}/>

            <Tab.Screen name={"Profile"} component={SignUp} options={{
                tabBarIcon:({color}) => ( <Ionicons name={'person-outline'} size={26} color={color} />)
            }}/>
        </Tab.Navigator>
    )
}
