import RenderBook from '../features/books/RenderBook';

const BookInfoScreen = ({ route }) => {
    const { book } = route.params;
    return <RenderBook book={book} />
}

export default BookInfoScreen;