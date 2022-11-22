import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "PmiIsh@16326",
  database: "crudtest",
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

// read data from db
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books;";
  connection.query(q, (error, data) => {
    if (error) return res.send(error);
    return res.json(data);
  });
});

//crete data in db
app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`,`description`,`cover`) VALUES (?)";
  const values = [req.body.title, req.body.description, req.body.cover];

  connection.query(q, [values], (error, data) => {
    if (error) return res.send(error);
    return res.json(data);
  });
});

// update items
app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE book SET `title` = ?, `description` = ?, `cover`=?  WHERE `id` = ?;";

  const values = [req.body.title, req.body.description, req.body.cover];

  connection.query(q, [...values, bookId], (error, data) => {
    if (error) return res.send(error);
    return res.json(data);
  });
});

//delete items
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE `id`=?;";

  connection.query(q, [bookId], (error, data) => {
    if (error) return res.send(error);
    return res.json(data);
  });
});

app.listen(3000, () => {
  console.log("Connected to backend!");
});
