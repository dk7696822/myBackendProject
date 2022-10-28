const AuthorModel = require("../models/authorModel");
const BookModel = require("../models/bookModel");
const PublisherModel = require("../models/publisherModel");

exports.createBook = async function (req, res) {
  let book = req.body;
  let bookCreated = await BookModel.create(book);
  res.send({ data: bookCreated });
};

exports.createAuthor = async (req, res) => {
  let author = req.body;
  let authorCreated = await AuthorModel.create(author);
  res.send(authorCreated);
};

exports.createPublisher = async (req, res) => {
  let publisher = req.body;
  let createPublisher = await PublisherModel.create(publisher);
  res.send(createPublisher);
};

exports.getBooks = async (req, res) => {
  let getBooks = await BookModel.find().populate("author publisher");
  res.send(getBooks);
};
