const Book = require("../models/book.models.js");
const getAllBooks = async (req, res) => {};

const getSingleBookById = async (req, res) => {};
const addNewBook = async (req, res) => {
  try {
    console.log("i was here");
    const { title, author, year } = req.body;
    const newlyCreatedBook = await Book.create({ title, author, year });
    console.log("i was here2");
    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const updateBook = async (req, res) => {};
const deleteBook = async (req, res) => {};
module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
