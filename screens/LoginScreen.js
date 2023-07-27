import { View, Text, Button, TextInput } from 'react-native';
const LoginScreen = () => {
    return (
        <View>
            <Text>Login to your account</Text>
            <TextInput
                placeholder="Email"
            />
            <TextInput
                placeholder="Password"
            />
        </View>
    )
}

export default LoginScreen