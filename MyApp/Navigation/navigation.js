import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserList from "../../AppModules/UserListModule/View/UserList";
import DetailedView from "../../AppModules/UserDetailsModule/View/DetailedView";
import Subscribers from "../../AppModules/UserDetailsModule/View/Subscribers";

const Stack = createStackNavigator();
const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="UserList" component={UserList} />
                <Stack.Screen name="detailedScreen" component={DetailedView} />
                <Stack.Screen name="subscribers" component={Subscribers} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
