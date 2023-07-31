import Main from "./screens/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ImageBackground } from "react-native";
import { ThemeProvider } from "react-native-elements";

const customTheme = {
    Card: {
        containerStyle: {
            backgroundColor: 'transparent'
        }
    }
};

export default function App() {

    return (
        <ThemeProvider theme={customTheme}>
            <NavigationContainer >
                <Main />
            </NavigationContainer>
        </ThemeProvider>

    );
}