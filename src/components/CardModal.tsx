export const CardModal = ({
  thumbnail,
  category,
  title,
  author,
  description,
  modalOn,
  setModalOn,
}: any) => {
  return (
    <div
      className={modalOn ? "card_modal_active" : "card_modal"}
      onClick={setModalOn}
    >
      <div className="card_modal_content" onClick={(e) => e.stopPropagation()}>
        <img
          className="footer_image"
          alt="Изображение не загрузилось"
          src={thumbnail}
        />
        <div className="footer_info">
          <h4 className="footer_category">{category}</h4>
          <h2 className="footer_title">{title}</h2>
          <h4 className="footer_author">{author}</h4>
          <div className="description">{description}</div>
        </div>
      </div>
    </div>
  );
};
