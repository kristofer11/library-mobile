import { View, Platform } from "react-native";
import Constants from "expo-constants";
import BookshelfScreen from "./BookshelfScreen";
import BookInfoScreen from "./BookInfoScreen";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Icon } from "react-native-elements";
import { BOOKSHELF_DATA } from "../shared/BOOKSHELF_DATA";
import { createStackNavigator } from "@react-navigation/stack";

const BookshelfNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Bookshelf"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#5637DD'
                },
                headerTintColor: '#fff',
            }}
        >
            <Stack.Screen 
                name="Bookshelf"
                component={BookshelfScreen}
                options={{
                    title: 'Bookshelf'
                }}
            />
            <Stack.Screen 
                name="BookInfoScreen"
                component={BookInfoScreen}
                options={({ route }) => ({
                    title: route.params.book.title
                })}
            />
        </Stack.Navigator>
        // <BookshelfScreen books={books} />
    )
};

const Main = () => {
   return (
        <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
            <BookshelfNavigator />
        </View>
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