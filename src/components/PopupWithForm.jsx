import React from "react";

function PopupWithForm({title, name, isOpen, onClose, buttonText, children}) {
  return (
    <div className={isOpen ? `popup popup_${name} popup_active` : `popup popup_${name}`} onClick={onClose}>
      <button type="button" className="popup__close popup__close_form" aria-label="закрыть попап"></button>
      <form className={`popup__container popup__container_${name}`} name={name} onClick={(e) => e.stopPropagation()}>
        <h3 className="popup__title">{title}</h3>
        {children}
        <button type="submit" className="popup__save-btn">{buttonText}</button>
      </form>
    </div>
  );
}

export default PopupWithForm;