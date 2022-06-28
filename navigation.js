import Main from "./components/Main";
import Contacts from "./components/Contacts";
import FullNews from "./components/FullNews";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Main" 
                    component={Main} 
                    options={
                        {
                            title: 'главная',
                            headerStyle: {backgroundColor: 'rgb(233, 134, 184)', titleColor: '#fff', height: 70},
                            headerTintColor: '#fff'
                        }
                    }
                    
                />
                <Stack.Screen 
                    name="Contacts" 
                    component={Contacts} 
                    options={{title: 'контакты'}}
                />
                <Stack.Screen 
                    name="FullNews" 
                    component={FullNews} 
                    options={{title: 'статья'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}