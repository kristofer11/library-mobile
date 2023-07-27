import { View, Text } from "react-native";
import BookshelfScreen from "./BookshelfScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { useState } from "react";
import { BOOKSHELF_DATA } from "../../shared/BOOKSHELF_DATA.JS";

const Main = () => {
    // const Tab = createBottomTabNavigator();
    const [books, setBooks] = useState(BOOKSHELF_DATA);

    return (
        <BookshelfScreen books={books} />
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