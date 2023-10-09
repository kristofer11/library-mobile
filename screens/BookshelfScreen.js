import { View, Text, SafeAreaView, Button, FlatList, Image } from 'react-native';
import LibraryDisplay from '../components/LibraryDisplay';
import styles from '../config/styles';
import LoginRegisterModal from '../components/LoginRegisterModal';
import { Avatar, ListItem } from 'react-native-elements';
import { useState } from 'react';
import { BOOKSHELF_DATA } from '../shared/BOOKSHELF_DATA';
import CustomBackground from '../components/CustomBackground';


const BookshelfScreen = ({ navigation, setIsLoggedIn }) => {
    const [books, setBooks] = useState([{ id: 1, title: 'brews', author: 'hello', rating: 4, review: 'good', img: 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/48/assets/src/react-native-logo.png' }]);

    const renderBookItem = ({ item: book }) => {
        return (
            <ListItem
                style={styles.bookItem}
                onPress={() =>
                    navigation.navigate('BookInfoScreen', { book })}
            >
                <ListItem.Content style={styles.listItemContent}>
                    <Image 
                        style={{width: 111, height: 111}}
                        source={{ uri: book.img }}
                    />
                    <ListItem.Title style={styles.bookItemTitle}>{book.title}</ListItem.Title>
                    <ListItem.Subtitle style={styles.bookItemSubtitle}>{book.author}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <CustomBackground>
            <FlatList
                data={books}
                renderItem={renderBookItem}
                keyExtractor={item => item.id.toString()}
            />
        </CustomBackground>
    )
}

export default BookshelfScreen;