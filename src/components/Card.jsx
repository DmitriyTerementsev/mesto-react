import React from "react";

function Card({ name, link, likes, onImgClick, onTrashClick }) {
  function handleClick() {
    onImgClick(name, link);
  }
  function handleDelClick() {
    onTrashClick();
  }

  return (
    <article className="element">
      <button
        type="button"
        className="element__delete-btn"
        aria-label="Удаление фото"
        onClick={handleDelClick}
      ></button>
      <img
        className="element__pic"
        src={link}
        alt={name}
        onClick={handleClick}
      />
      <div className="element__group">
        <h2 className="element__text">{name}</h2>
        <div className="element__like-group">
          <button
            type="button"
            className="element__like-btn"
            aria-label="Кнопка лайка"
          ></button>
          <div className="element__like-counter">{likes.length}</div>
        </div>
      </div>
    </article>
  );
}

export default Card;
