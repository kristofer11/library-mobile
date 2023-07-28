import RenderBook from '../features/books/RenderBook';
import styles from '../config/styles';

const BookInfoScreen = ({ route }) => {
    const { book } = route.params;
    return <RenderBook book={book} />
}

export default BookInfoScreen;