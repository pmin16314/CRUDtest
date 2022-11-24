import { useState } from "react";
import Add from "./components/Add";
import Books from "./components/Books";

function App() {
  const [visibleAddBook, setVisibleAddBook] = useState(false);
  return (
    <div className="h-[100vh] flex flex-col items-center font-poppins bg-blue-100">
      <div className="top-0 left-0 w-4/5 flex-none flex flex-row justify-between items-center my-4 py-4 px-10 shadow-md rounded-[10px] bg-blue-400/75 mb-10">
        <h1 className="  text-white font-pacifico text-[50px] ">Book Shop</h1>
        <button
          className="bg-blue-500 p-3 rounded-[10px] hover:bg-blue-600 duration-200 ease-in-out text-white hover:scale-105 "
          onClick={() => setVisibleAddBook(true)}>
          Add Book
        </button>
      </div>
      {visibleAddBook && (
        <div>
          <Add setVisibleAddBook={setVisibleAddBook} />
        </div>
      )}
      <Books />
      <div className="flex flex-none justify-center py-5 w-full no-scrollbar">
        <h1 className="text-blue-500 text-[15px] ">
          Created by Panchana Madara
        </h1>
      </div>
    </div>
  );
}

export default App;
