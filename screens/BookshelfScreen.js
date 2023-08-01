import { View, Text, SafeAreaView, Button, FlatList } from 'react-native';
import LibraryDisplay from '../components/LibraryDisplay';
import styles from '../config/styles';
import LoginRegisterModal from '../components/LoginRegisterModal';
import { Avatar, ListItem } from 'react-native-elements';
import { useState } from 'react';
import { BOOKSHELF_DATA } from '../shared/BOOKSHELF_DATA';
import CustomBackground from '../components/CustomBackground';


const BookshelfScreen = ({ navigation, setIsLoggedIn }) => {
    const [books, setBooks] = useState(BOOKSHELF_DATA);

    const renderBookItem = ({ item: book }) => {
        return (
                <ListItem
                    style={styles.bookItem}
                    onPress={() =>
                        navigation.navigate('BookInfoScreen', { book })}
                >
                    <ListItem.Content style={styles.listItemContent}>
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