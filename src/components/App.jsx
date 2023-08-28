import React, { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import {
  CurrentUserContext,
  CurrentCardContext,
} from "../contexts/CurrentUserContext";
import { Api } from "../utils/Api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import DeleteCardPopup from "./DeleteCardPopup";
import AddNewCardPopup from "./AddNewCardPopup";

function App() {
  //------------Объявление всех стейтов
  //------------Пользователь

  const [currentUser, setCurrentUser] = useState(null);

  //------------Карточки

  const [cards, setCards] = useState(null);

  //------------Текст кнопок сохранения

  const [buttonText, setButtonText] = useState({
    user: "Сохранить",
    card: "Создать",
    delCard: "Да",
  });
  //------------Данные карточки

  const [cardData, setCardData] = useState(null);

  //------------id карточки

  const [cardId, setCardId] = useState(null);

  //------------Попапы

  const [popup, setPopup] = useState({
    profile: false,
    card: false,
    avatar: false,
    delCard: false,
    image: false,
  });

  //------------Запрос на сервер
  //------------Получить данные: имя и карточки

  const {
    getUserInfo,
    setUserInfo,
    changeAvatar,
    getCards,
    toggleLike,
    addNewCard,
    deleteCard,
    getError,
  } = Api("https://nomoreparties.co/v1/cohort-71");

  useEffect(() => {
    getUserInfo().then(setCurrentUser).catch(getError);
    getCards().then(setCards).catch(getError);
  }, []);

  //------------Текст кнопки подтверждения

  const loadingButtonText = (isLoading, buttonName) => {
    const text = buttonName == "delCard" ? "Удаление..." : "Сохранение...";
    const initialButtonText = buttonText[buttonName];
    isLoading
      ? setButtonText({ ...buttonText, [buttonName]: text })
      : setButtonText({ ...buttonText, [buttonName]: initialButtonText });
  };

  //------------Отправка на сервер

  function handleSubmit(request, buttonName) {
    loadingButtonText(true, buttonName);
    request()
      .then(closeAllPopups())
      .catch(getError)
      .finally(() => loadingButtonText(false, buttonName));
  }

  //------------Установить имя пользователя

  function handleSetUserInfo(data) {
    function request() {
      return setUserInfo(data).then((res) => {
        setCurrentUser({ ...currentUser, name: res.name, about: res.about });
      });
    }
    handleSubmit(request, "user");
  }

  //------------Изменить аватар

  function handleChangeAvatar(data) {
    function request() {
      return changeAvatar(data).then((res) => {
        setCurrentUser({ ...currentUser, avatar: res.avatar });
      });
    }
    handleSubmit(request, "user");
  }

  //------------Добавить карточку

  function handleAddNewCard(data) {
    function request() {
      return addNewCard(data).then((newCard) => {
        setCards([newCard, ...cards]);
      });
    }
    handleSubmit(request, "card");
  }

  //------------Удалить карточку

  function handleDeleteCard() {
    function request() {
      return deleteCard(cardId).then(() => {
        setCards((cards) => cards.filter((card) => card._id != cardId));
      });
    }
    handleSubmit(request, "delCard");
  }

  //------------Поставить/удалить лайк

  function handleToggleLike(card, isLiked) {
    toggleLike(card._id, isLiked)
      .then((newCard) =>
        setCards((cards) =>
          cards.map((c) => (c._id === card._id ? newCard : c))
        )
      )
      .catch(getError);
  }

  //------------Открытие попапов
  //------------Профиль

  function handleEditProfileClick() {
    setPopup({ ...popup, profile: true });
  }

  //------------Новое место

  function handleAddPlaceClick() {
    setPopup({ ...popup, card: true });
  }

  //------------Изменить аватар

  function handleEditAvatarClick() {
    setPopup({ ...popup, avatar: true });
  }

  //------------Удалить карточку

  function handleDelCardClick(id) {
    setPopup({ ...popup, delCard: true });
    setCardId(id);
  }

  //------------Поставить лайк

  function handleCardClick(name, link) {
    setPopup({ ...popup, image: true });
    setCardData({ name: name, link: link });
  }

  //------------Закрыть попапы

  function closeAllPopups() {
    setPopup({
      profile: false,
      card: false,
      avatar: false,
      delCard: false,
      image: false,
    });
  }

  //------------Закрытие попапов на Esc

  const isOpenPopup =
    popup.profile ||
    popup.card ||
    popup.avatar ||
    popup.addCard ||
    popup.delCard ||
    popup.image;

  useEffect(() => {
    function keyHandler(evt) {
      evt.key === "Escape" ? closeAllPopups() : null;
    }
    isOpenPopup ? document.addEventListener("keydown", keyHandler) : null;
    return () => {
      document.removeEventListener("keydown", keyHandler);
    };
  }, [isOpenPopup]);

  //--------------

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentCardContext.Provider value={cards}>
        <div className="body-background">
          <div className="root">
            <Header />
            <Main
              onEditProfile={handleEditProfileClick}
              addCard={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onImgClick={handleCardClick}
              onLikeClick={handleToggleLike}
              onTrashClick={handleDelCardClick}
              cards={cards}
            />
            <Footer />
            <EditProfilePopup
              isOpen={popup.profile}
              onClose={closeAllPopups}
              setUserInfo={handleSetUserInfo}
              buttonText={buttonText.user}
            />
            <AddNewCardPopup
              isOpen={popup.card}
              onClose={closeAllPopups}
              addCard={handleAddNewCard}
              buttonText={buttonText.card}
            />
            <EditAvatarPopup
              isOpen={popup.avatar}
              onClose={closeAllPopups}
              changeAvatar={handleChangeAvatar}
              buttonText={buttonText.user}
            />
            <DeleteCardPopup
              isOpen={popup.delCard}
              onClose={closeAllPopups}
              deleteCard={handleDeleteCard}
              buttonText={buttonText.delCard}
            />
            <ImagePopup
              isOpen={popup.image}
              onClose={closeAllPopups}
              card={cardData}
            />
          </div>
        </div>
      </CurrentCardContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
