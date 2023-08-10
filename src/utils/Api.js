class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  //----------Получение данных
  request({ data, method = "GET", section }) {
    //----------Запрос по адресу и получение данных
    return fetch(`${this._url}/v1/cohort-71${section}`, {
      method: method,
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : null,
    }).then((res) =>
      res.ok
        ? res.json()
        : Promise.reject(`Ошибка: ${res.status}, ${res.statusText}`)
    );
  }
  //----------Вывод ошибки
  catch(err) {
    console.log(err);
  }
}
//----------Адрес и личный токен
export const api = new Api(
  "https://nomoreparties.co",
  "27985bc4-246f-41ac-8e73-e4e5229db7b8"
);
