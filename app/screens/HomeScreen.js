import React from 'react'
import { SafeAreaView, View, Text, TextInput } from 'react-native';
import styles from '../config/styles';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <Text style={{ alignSelf: "center" }}>Create Your Account Below</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                placeholder="User Name"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
            />
            <TextInput
                style={styles.input}
                placeholder="Re-Enter Password"
            />
            <TextInput
                style={styles.input}
                placeholder="Supervisors Email"
            />
        </SafeAreaView>
    )
}

export default HomeScreen;