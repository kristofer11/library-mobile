import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderBook = ({ book }) => {
    if (book) {
        return (
            <Card
                containerStyle={{ padding: 0 }}
            >
                <View>
                    <Text
                        style={{
                            color: 'white',
                            backgroundColor: 'dodgerblue',
                            textAlign: 'center',
                            fontSize: 20,
                            padding: 10,
                            borderRadius: 10,
                            marginBottom: 10
                        }}>{book.author}</Text>
                    <Text
                        style={{
                            color: 'white',
                            backgroundColor: 'dodgerblue',
                            textAlign: 'center',
                            fontSize: 20,
                            padding: 10,
                            borderRadius: 10,
                            marginBottom: 10
                        }}>Rating: {book.rating}</Text>
                    <Text
                        style={{
                            color: 'white',
                            backgroundColor: 'dodgerblue',
                            textAlign: 'center',
                            fontSize: 20,
                            padding: 10,
                            borderRadius: 10
                        }}>Review: {book.review}</Text>
                </View>
            </Card>
        )
    }
    return <View />
};

export default RenderBook;