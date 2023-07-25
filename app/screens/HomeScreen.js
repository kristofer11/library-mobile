import React from 'react'
import { SafeAreaView, View, Text, TextInput, Button } from 'react-native';
import styles from '../config/styles';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <Text style={{ alignSelf: "center" }}>Welcome to My Bookshelf</Text>
            <Button 
                title="View my shelf"
            />
            <Button 
                title="Login"
            />
                        <Button 
                title="Register"
            />
        </SafeAreaView>
    )
}

export default HomeScreen;