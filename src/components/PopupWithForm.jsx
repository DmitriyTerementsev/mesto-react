import React from "react";

function PopupWithForm() {
  const
  return (
    <div className={`popup popup_${props.name}`}>
      <button type="button" className="popup__close popup__close_form" aria-label="закрыть попап"></button>
      <form className={`popup__container popup__container_${props.name}`} name="profile_edit_form" novalidate>
        <h3 className="popup__title">Редактировать профиль</h3>
        <input className="input-text input-text_type_name" name="name" type="text" id="input_name" placeholder="Введите имя"
          value="/" minlength="2" maxlength="40" required />
        <span className="input input_name-error"></span>
        <input className="input-text input-text_type_about" name="about" type="text" id="input_about" placeholder="О себе"
          value="/" minlength="2" maxlength="200" required />
        <span className="input input_about-error"></span>
        <button type="submit" className="popup__save-btn">Сохранить</button>
      </form>
    </div>
  );
}

export default PopupWithForm;