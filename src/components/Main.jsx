import React from "react";

function handleEditAvatarClick() {
  document.querySelector(".popup_edit-avatar").classNameList.add("popup_active");
}

function handleEditProfileClick() {
  document.querySelector(".popup_edit-info").classNameList.add("popup_active");
}

function handleAddPlaceClick() {
  document.querySelector(".popup_add-card").classNameList.add("popup_active");
}

function Main() {
  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container">
            <img
              onClick={handleEditAvatarClick}
              className="profile__avatar"
              src="<%=require('./images/profile-pic.jpg')%>"
              alt="Аватар"
            />
            <img
              className="profile__avatar profile__avatar_edit"
              src="<%=require('./images/edit-profile.svg')%>"
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
              onClick={handleEditProfileClick}
              type="button"
              className="profile__edit-btn"
              aria-label="Кнопка редактирования профиля"
            ></button>
          </div>
          <button
            onClick={handleAddPlaceClick}
            type="button"
            className="profile__add-btn"
            aria-label="Кнопка добавления фото"
          ></button>
        </section>

        <section className="elements"></section>
      </main>
      <template id="element-template">
        <article className="element">
          <button
            type="button"
            className="element__delete-btn"
            aria-label="Удаление фото"
          ></button>
          <img className="element__pic" src="./" alt="фото" />
          <div className="element__group">
            <h2 className="element__text"></h2>
            <div className="element__like-group">
              <button
                type="button"
                className="element__like-btn"
                aria-label="Кнопка лайка"
              ></button>
              <div className="element__like-counter">0</div>
            </div>
          </div>
        </article>
      </template>

      <div className="popup popup_edit-info">
        <button
          type="button"
          className="popup__close popup__close_form"
          aria-label="закрыть попап"
        ></button>
        <form
          className="popup__container popup__container_edit-info"
          name="profile_edit_form"
          novalidate
        >
          <h3 className="popup__title">Редактировать профиль</h3>
          <input
            className="input-text input-text_type_name"
            name="name"
            type="text"
            id="input_name"
            placeholder="Введите имя"
            value="/"
            minlength="2"
            maxlength="40"
            required
          />
          <span className="input input_name-error"></span>
          <input
            className="input-text input-text_type_about"
            name="about"
            type="text"
            id="input_about"
            placeholder="О себе"
            value="/"
            minlength="2"
            maxlength="200"
            required
          />
          <span className="input input_about-error"></span>
          <button type="submit" className="popup__save-btn">
            Сохранить
          </button>
        </form>
      </div>

      <div className="popup popup_add-card">
        <button
          type="button"
          className="popup__close popup__close_form"
          aria-label="закрыть попап"
        ></button>
        <form
          className="popup__container popup__container_add-card"
          name="add_card_form"
          novalidate
        >
          <h3 className="popup__title">Новое место</h3>
          <input
            className="input-text input-text_type_place"
            name="place"
            type="text"
            id="input_place"
            placeholder="Название"
            minlength="2"
            maxlength="30"
            required
          />
          <span className="input input_place-error"></span>
          <input
            className="input-text input-text_type_link"
            name="link"
            type="url"
            id="input_link"
            placeholder="Добавьте ссылку"
            required
          />
          <span className="input input_link-error"></span>
          <button type="submit" className="popup__save-btn">
            Создать
          </button>
        </form>
      </div>

      <div className="popup popup_open-card">
        <div className="popup__full-pic">
          <button
            type="button"
            className="popup__close popup__close_card"
            aria-label="закрыть попап"
          ></button>
          <img className="popup__photo" src="./" alt="фото" />
          <p className="popup__description"></p>
        </div>
      </div>

      <div className="popup popup_edit-avatar">
        <button
          type="button"
          className="popup__close popup__close_form"
          aria-label="закрыть попап"
        ></button>
        <form
          className="popup__container popup__container_edit-avatar"
          name="add_card_form"
          novalidate
        >
          <h3 className="popup__title">Обновить аватар</h3>
          <input
            className="input-text input-text_type_avatar"
            name="avatar"
            type="url"
            id="input_avatar"
            placeholder="Добавьте ссылку"
            required
          />
          <span className="input input_avatar-error"></span>
          <button type="submit" className="popup__save-btn">
            Сохранить
          </button>
        </form>
      </div>

      <div className="popup popup_delete-card">
        <form
          className="popup__container popup__container_delete-card"
          name="delete-card"
          novalidate
        >
          <button
            type="button"
            className="popup__close popup__close_card"
            aria-label="закрыть попап"
          ></button>
          <h3 className="popup__title">Вы уверены?</h3>
          <button type="submit" className="popup__save-btn">
            Да
          </button>
        </form>
      </div>
    </>
  );
}

export default Main;
