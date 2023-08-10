import React from "react";
import { api } from "../utils/Api";
import { useState, useEffect } from "react";
import editOverlay from "../images/edit-profile.svg";
import Card from "./Card";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onImgClick,
  onTrashClick,
}) {
  const [userName, setUserName] = useState(null);
  const [userDescription, setUserDescription] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [cards, setCards] = useState(null);

  //----------Запрос на сервер, получаем необходимые данные
  useEffect(() => {
    api
      .request({ section: "/users/me" })
      .then(({ name, about, avatar }) => {
        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar);
      })
      .catch(api.catch);

    api.request({ section: "/cards" }).then(setCards).catch(api.catch);
  }, []);

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container">
            <img
              className="profile__avatar"
              src={userAvatar}
              alt={userName}
              onClick={onEditAvatar}
            />
            <img
              className="profile__avatar profile__avatar_edit"
              src={editOverlay}
              alt="Аватар"
            />
          </div>
          <div className="profile__info">
            <div className="profile__description">
              <h1 className="profile__name" id="profile__name">
                {userName}
              </h1>
              <p className="profile__about" id="profile__about">
                {userDescription}
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

        <section className="elements">
          {cards?.map((data) => (
            <Card
              key={data._id}
              {...data}
              onImgClick={onImgClick}
              onTrashClick={onTrashClick}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
