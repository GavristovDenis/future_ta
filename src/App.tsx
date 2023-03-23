import { useState, useEffect } from "react";
import axios from "axios";
import { SearchBar } from "./components/SearchBar";
import { BookCard } from "./components/BookCard";
import { CardModal } from "./components/CardModal";
import { type } from "os";
// interface Book {
//   items: [
//     {
//       vollumeInfo: {
//         id: string;
//         title: string;
//         author: string;
//         description: string;
//         categories: [string];
//         imageLinks: {
//           smallThumbnail: URL;
//           Thumbnail: URL;
//         };
//       };
//     }
//   ];
// }

const App = () => {
  const [booksArray, setBooksArray] = useState<any>([]);
  const [search, setSearch] = useState("");
  const [modalOn, setModalOn] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=cat&key=AIzaSyCCgu28PsNJ0DzytDl-ftxaV3g0TjPyXEs"
      )
      .then((j) => setBooksArray(j.data.items));
  }, []);
  const SearchBook = (evt: any) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyCCgu28PsNJ0DzytDl-ftxaV3g0TjPyXEs"
        )

        .then((j) => setBooksArray(j.data.items));
    }
  };
  console.log(booksArray);
  return (
    <div className="App">
      <CardModal
        modalOn={modalOn}
        setModalOn={() => setModalOn(false)}
        // title={selectedBook.title}
      />
      <SearchBar setSearch={setSearch} SearchBook={SearchBook} />
      <div className="books_container">
        {booksArray.map((book: any, index: any) => {
          return (
            <BookCard
              key={index}
              smallThumbnail={book.volumeInfo.imageLinks.smallThumbnail}
              category={book.volumeInfo.categories}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              setModalOn={() => setModalOn(true)}
              onClick={() =>
                setSelectedBook({
                  thumbnail: book.volumeInfo.imageLinks.thumbnail,
                  category: book.volumeInfo.categories,
                  title: book.volumeInfo.title,
                  author: book.volumeInfo.authors,
                })
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
