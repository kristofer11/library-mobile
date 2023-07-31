import RenderBook from '../features/books/RenderBook';
import styles from '../config/styles';
import CustomBackground from '../components/CustomBackground';

const BookInfoScreen = ({ route }) => {
    const { book } = route.params;
    return (
        <CustomBackground>
            <RenderBook book={book} />
        </CustomBackground>
    )
}

export default BookInfoScreen;