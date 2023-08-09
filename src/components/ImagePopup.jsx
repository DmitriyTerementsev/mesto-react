import React from "react";

function ImagePopup(props) {
  return (
    <div className={`popup popup_${props.name}`}>
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
  );
}

export default ImagePopup;