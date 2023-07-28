import Main from "./screens/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ImageBackground } from "react-native";
import styles from "./config/styles";

export default function App() {

    return (
        <NavigationContainer >
                <Main />
        </NavigationContainer>
    );
}