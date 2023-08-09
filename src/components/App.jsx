import React, { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [popup, setPopup] = useState({
    profile: false,
    avatar: false,
    addCard: false,
    delCard: false,
  });

  function handleEditProfileClick() {
    console.log("тык");
    setPopup({ ...popup, profile: true });
  }
  function handleEditAvatarClick() {
    console.log("тык");
    setPopup({ ...popup, avatar: true });
  }
  function handleAddPlaceClick() {
    console.log("тык");
    setPopup({ ...popup, addCard: true });
  }
  function handleADelCardClick() {
    console.log("тык");
    setPopup({ ...popup, delCard: true });
  }

  function closeAllPopups() {
    setPopup({
      profile: false,
      avatar: false,
      addCard: false,
      delCard: false,
    });
  }

  return (
    <>
      <div className="body-background">
        <div className="root">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
          />
          <Footer />
          <PopupWithForm
            title={"Редактировать профиль"}
            name={"edit-info"}
            isOpen={popup.profile}
            onClose={closeAllPopups}
            buttonText={"Сохранить"}
          >
            <input
              className="input-text input-text_type_name"
              name="name"
              type="text"
              id="input_name"
              placeholder="Введите имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="input input_name-error"></span>
            <input
              className="input-text input-text_type_about"
              name="about"
              type="text"
              id="input_about"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="input input_about-error"></span>
          </PopupWithForm>
          <PopupWithForm
            title={"Новое место"}
            name={"add-card"}
            isOpen={popup.addCard}
            onClose={closeAllPopups}
            buttonText={"Создать"}
          >
            <input
            className="input-text input-text_type_place"
            name="place"
            type="text"
            id="input_place"
            placeholder="Название"
            minLength="2"
            maxLength="30"
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
          </PopupWithForm>
          <PopupWithForm
            title={"Обновить аватар"}
            name={"edit-avatar"}
            isOpen={popup.avatar}
            onClose={closeAllPopups}
            buttonText={"Сохранить"}
          >
            <input
            className="input-text input-text_type_avatar"
            name="avatar"
            type="url"
            id="input_avatar"
            placeholder="Добавьте ссылку"
            required
          />
          <span className="input input_avatar-error"></span>
          </PopupWithForm>
          <PopupWithForm
            title={"Вы уверены?"}
            name={"delete-card"}
            isOpen={popup.delCard}
            onClose={closeAllPopups}
            buttonText={"Да"}
          >
          </PopupWithForm>
        </div>
      </div>
    </>
  );
};

export default App;
