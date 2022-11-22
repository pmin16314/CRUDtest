import React from "react";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Add from "./Add";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/books");
        console.log(res);
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllBooks();
  }, [books]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/books/${id}`);
      console.log("aasasa");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grow  overflow-auto w-4/5">
      <div className="grid grid-cols-3 gap-5">
        {books.map((book) => (
          <div
            key={book.id}
            className=" flex flex-col rounded-[10px] h-[600px] items-center p-6 bg-white opacity-75 rounded-[15 px]">
            <img className="h-[300px] mb-5" src={book.cover} alt="" />
            <h2 className="font-bold text-[24px] text-blue-500 mb-5 text-center">
              {book.title}
            </h2>
            <p>{book.description}</p>

            <button>Update </button>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
