import { View, Text, Button, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { api } from '../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import CustomBackground from '../components/CustomBackground';


const LoginScreen = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://library-api-1iik.onrender.com/api/users/login', {
                email,
                password,
            })

            const token = response.data.token

            await AsyncStorage.setItem('jwtToken', token);

            setIsLoggedIn(true)
            console.log(response.data)

            Alert.alert('Login successful', 'You have been logged in successfully.')

            navigation.navigate('Bookshelf');
        } catch (error) {
            Alert.alert('Login failed', 'Invalid email or password. Please try again.')
            console.log(error)
        }
    }

    return (
        <CustomBackground>
            <View>
                <Text style={{backgroundColor: '#fff', color: '#000'}}>Login to your account</Text>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail} 
                    backgroundColor="#fff"
                    color="#000"    
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    backgroundColor="#fff"
                    color="#000" 
                />
                <Button title="Login" onPress={handleLogin} />

            </View>
        </CustomBackground>
    )
}

export default LoginScreen