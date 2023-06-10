import React, { useState } from "react";
import TextField from "./textField";

const MyForm = () => {
  const [values, setValues] = useState({
    email: "",
    link: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { email, link, description } = values;
  return (
    <>
      <h1> My Form {email} </h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
        />

        <TextField
          id="link"
          name="link"
          label="Ссылка на страницу с ошибкой"
          value={link}
          onChange={handleChange}
        />

        <TextField
          id="description"
          name="description"
          label="Описание"
          value={description}
          onChange={handleChange}
        />
        <button type="submit">Отправить</button>
      </form>
    </>
  );
};

export default MyForm;
