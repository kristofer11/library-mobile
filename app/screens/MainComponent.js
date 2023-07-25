import { View, Text } from "react-native";
import HomeScreen from "./HomeScreen";
import BookshelfScreen from "./BookshelfScreen";
import AccountScreen from "./AccountScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

const Main = () => {
    const Tab = createBottomTabNavigator();

    return (
        <View style={{ flex: 1, backgroundColor: "#888" }}>
            <Tab.Navigator
                initialRouteName='Home'
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
            </Tab.Navigator>
        </View>
    )
}

export default Main;