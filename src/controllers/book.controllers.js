const Book = require("../models/book.models.js");
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    if (books) {
      res.status(200).json({
        message: "list of all books",
        data: books,
      });
    } else {
      res.status(404).json({
        message: " books not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const getDetails = await Book.findById(getCurrentBookId);
    if (!getDetails) {
      res.status(404).json({
        message: " books not found",
        success: false,
      });
    }

    res.status(200).json({
      message: " book details",
      data: getDetails,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
    });
  }
};
const addNewBook = async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const newlyCreatedBook = await Book.create({ title, author, year });

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
const updateBook = async (req, res) => {
  try {
    const updateBookData = req.body;
    const getCurrentBookId = req.params.id;
    const getUpadtedBook = await Book.findByIdAndUpdate(
      getCurrentBookId,
      updateBookData,
      {
        new: true,
      }
    );
    if (!getUpadtedBook) {
      res.status(404).json({
        message: " books not found",
        success: false,
      });
    }

    res.status(200).json({
      message: " book updated successfully",
      data: getUpadtedBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
    });
  }
};
const deleteBook = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const getDeletedbook = await Book.findByIdAndDelete(getCurrentBookId);
    if (!getDeletedbook) {
      res.status(404).json({
        message: " books not found",
        success: false,
      });
    }

    res.status(200).json({
      message: " book deleted",
      data: getDeletedbook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
    });
  }
};
module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
