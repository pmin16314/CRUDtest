import React from "react";
import { useState } from "react";
import axiox from "axios";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    cover: "",
  });

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axiox.post("http://localhost:3000/books", book);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add Book</h1>
      <div>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Book Title"
          name="title"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Description"
          name="description"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Cover"
          name="cover"
        />
      </div>

      <button onClick={handleClick}>Add Book</button>
    </div>
  );
};

export default Add;
