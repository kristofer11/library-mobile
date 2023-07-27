import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

const NewAccountScreen = () => {
    return (
        <SafeAreaView>
            <Text style={{ alignSelf: "center" }}>Create an account to start adding books.</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
            />
            <TextInput
                style={styles.input}
                placeholder="Re-Enter Password"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

export default NewAccountScreen;