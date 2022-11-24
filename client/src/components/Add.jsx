import React from "react";
import { useState } from "react";
import axiox from "axios";

const Add = ({ setVisibleAddBook }) => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    cover: "",
  });

  const handleClose = (e) => {
    if (e.target.id === "overlay") setVisibleAddBook(false);
  };

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(book);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axiox.post("http://localhost:3000/books", book);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        id="overlay"
        onClick={handleClose}
        className="fixed inset-0 bg-black/75 z-50 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white flex items-center w-2/5 justify-center flex-col py-6 px-10 space-y-10 rounded-[15px]">
          <h1 className="font-bold text-[50px] text-cyan-700">Add Book</h1>
          <div className="flex flex-col w-5/6 space-y-5 focus:border-none border-none">
            <div>
              <label className="block mb-2 text-sm font-medium text-blue-500">
                Book Title
              </label>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Enter Book Title..."
                name="title"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-blue-500">
                Description
              </label>
              <textarea
                onChange={handleChange}
                placeholder="Enter Description..."
                name="description"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 "
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-blue-500">
                Cover Image
              </label>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Enter Cover Image URL..."
                name="cover"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 "
              />
            </div>
          </div>

          <button
            className="py-3 px-5 bg-cyan-700 rounded-xl text-white hover:bg-cyan-500 hover:scale-105 duration-100 ease-in"
            onClick={handleClick}>
            Add Book
          </button>
        </div>
      </div>
    </>
  );
};

export default Add;
