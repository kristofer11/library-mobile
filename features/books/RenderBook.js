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
                            backgroundColor: 'blue',
                            textAlign: 'center',
                            fontSize: 20
                        }}>{book.author}</Text>
                    <Text
                        style={{
                            color: 'white',
                            backgroundColor: 'blue',
                            textAlign: 'center',
                            fontSize: 20
                        }}>Rating: {book.rating}</Text>
                    <Text
                        style={{
                            color: 'white',
                            backgroundColor: 'blue',
                            textAlign: 'center',
                            fontSize: 20
                        }}>Review: {book.review}</Text>
                </View>
            </Card>
        )
    }
    return <View />
};

export default RenderBook;