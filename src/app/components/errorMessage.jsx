import React, { useState } from "react";

const ErrorMassage = () => {
  const [email, setEmail] = useState();

  const handleSubmit = () => {
    console.log("handleSubmit");
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    console.log(value);
  };

  return (
    <div>
      <h1>Отчёт об ошибке</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="email">Email</label>{" "}
          <input
            id="email"
            name="email"
            defaultValue="savkonon@yandex.ru"
            value={email}
            onChange={handleEmailChange}
          />
        </p>
        <p>
          <label htmlFor="link">Ссылка на страницу с ошибкой</label>{" "}
          <input id="link" name="link" />
        </p>
        <p>
          <label htmlFor="description">Описание</label>{" "}
          <input id="description" name="description" />
        </p>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default ErrorMassage;
