import React from "react";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Update from "./Update";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [visibleUpdateBook, setVisibleUpdateBook] = useState(false);

  console.log(visibleUpdateBook);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/books/${id}`);
      console.log(res.data);
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
            <p className="text-justify text-[15px]">{book.description}</p>
            <div className="space-x-6 mt-5 ">
              <button
                onClick={() => setVisibleUpdateBook(true)}
                className="py-2 px-3 bg-green-700 hover:bg-green-500 text-white
                rounded-lg duration-100 ease-in-out">
                {" "}
                Update{" "}
              </button>
              {visibleUpdateBook && (
                <div>
                  <Update
                    bookID={book.id}
                    setVisibleAddBook={setVisibleUpdateBook}
                  />
                </div>
              )}
              <button
                className="py-2 px-3 bg-red-700 hover:bg-red-500 text-white rounded-lg duration-100 ease-in-out"
                onClick={() => handleDelete(book.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
