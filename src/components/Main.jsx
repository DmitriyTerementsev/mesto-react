import React from "react";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container">
            <img
              className="profile__avatar"
              src=""
              alt="Аватар"
              onClick={onEditAvatar}
            />
            <img
              className="profile__avatar profile__avatar_edit"
              src=""
              alt="Аватар"
            />
          </div>
          <div className="profile__info">
            <div className="profile__description">
              <h1 className="profile__name" id="profile__name">
                Жак-Ив Кусто
              </h1>
              <p className="profile__about" id="profile__about">
                Исследователь океана
              </p>
            </div>
            <button
              type="button"
              className="profile__edit-btn"
              aria-label="Кнопка редактирования профиля"
              onClick={onEditProfile}
            ></button>
          </div>
          <button
            type="button"
            className="profile__add-btn"
            aria-label="Кнопка добавления фото"
            onClick={onAddPlace}
          ></button>
        </section>

        <section className="elements"></section>
      </main>
    </>
  );
}

export default Main;
