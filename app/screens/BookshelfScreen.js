import { View, Text, SafeAreaView } from 'react-native';
import LibraryDisplay from '../components/LibraryDisplay';
import styles from '../config/styles';
import LoginRegisterModal from '../components/LoginRegisterModal';

const BookshelfScreen = () => {
  return (
    <SafeAreaView style={styles.bookshelfScreen}>
        <Text>BookshelfScreen</Text>
        <LoginRegisterModal />
        <LibraryDisplay />
    </SafeAreaView>
  )
}

export default BookshelfScreen