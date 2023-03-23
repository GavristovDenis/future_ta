export const BookCard = ({ smallThumbnail, category, title, author }: any) => {
  return (
    <div className="book_card">
      <img
        alt="Изображение не загрузилось"
        src={smallThumbnail}
        className="card_image"
      />
      <div className="book_info">
        <div className="book_category">{category}</div>
        <div className="book_title">{title}</div>
        <div className="book_author">{author}</div>
      </div>
    </div>
  );
};
