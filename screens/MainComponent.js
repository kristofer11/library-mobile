import { View, Platform, Button, SafeAreaView } from "react-native";
import styles from '../config/styles';
import Constants from "expo-constants";
import BookshelfScreen from "./BookshelfScreen";
import BookInfoScreen from "./BookInfoScreen";
import LoginScreen from './LoginScreen';
import { useState, useEffect } from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Icon } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';


const BookshelfNavigator = ({ isLoggedIn, setIsLoggedIn }) => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Bookshelf"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#519C89'
                },
                headerTintColor: '#fff',
                cardStyle: {
                    backgroundColor: 'transparent',
                },
            }}
        >
            <Stack.Screen
                name="Bookshelf"
                component={BookshelfScreen}
                options={{
                    title: 'Bookshelf',
                    headerRight: () => (
                        <View style={styles.logoutButton} >
                            <Button
                                title="Logout"
                                onPress={() => {
                                    setIsLoggedIn(false);
                                }}
                            />
                        </View>
                    )
                }}
            />


            <Stack.Screen
                name="BookInfoScreen"
                component={BookInfoScreen}
                options={({ route }) => ({
                    title: route.params.book.title
                })}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    title: 'Login',
                }}
            />

        </Stack.Navigator>
        // <BookshelfScreen books={books} />
    )
};

const Main = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('jwtToken')

            if (token) {
                setIsLoggedIn(true)
                console.log('token found, went ahead and logged in the guy')
            }
        }
        checkToken();
    }, [])

    return (
            <SafeAreaView style={{ backgroundColor: 'transparent', flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
                {isLoggedIn ? <BookshelfNavigator setIsLoggedIn={setIsLoggedIn} /> : <LoginScreen isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
            </SafeAreaView>
    )
}

export default Main;



{/* <BookshelfScreen />
            <Tab.Navigator
                initialRouteName='Bookshelf'
                options={{
                    showIcon: true
                }}
            >
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color }) => (
                            <Icon
                                name='home'
                                type='ionicon'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name='My Bookshelf'
                    component={BookshelfScreen}
                    options={{
                        title: 'Bookshelf',
                        tabBarIcon: ({ color }) => (
                            <Icon
                                name='document'
                                type='ionicon'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name='Account'
                    component={AccountScreen}
                    options={{
                        title: 'Account',
                        tabBarIcon: ({ color }) => (
                            <Icon
                                name='person-outline'
                                type='ionicon'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
            </Tab.Navigator> */}