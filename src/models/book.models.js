const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Book title is required"],
      trim: true,
      maxLength: [100, "Book tittle cannot be more than 100 words"],
    },
    author: {
      type: String,
      required: [true, "Author name  is required"],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, "Publocation year is required"],
      min: [1000, "year must be at least 1000"],
      max: [new Date().getFullYear(), "tou cannot be in future"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
