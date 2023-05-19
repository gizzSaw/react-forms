import React, { useState } from "react";

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
        <p>
          <input
            placeholder="Your Email"
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            placeholder="Описание"
            id="description"
            type="description"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </p>
        <button type="submit">Отправить</button>
      </form>
      <form onSubmit={handleSubmit}>
        <label>
          Красный <input type="radio" name="color" />
        </label>

        <br />

        <label>
          Синий <input type="radio" name="color" />
        </label>

        <p>
          <button type="submit">Отправить</button>
        </p>
      </form>
    </>
  );
};

export default MyForm;
