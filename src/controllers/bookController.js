const { count } = require("console");
const BookModel = require("../models/bookModel");
const AuthorModel = require("../models/authorModel");
const NewBookModel = require("../models/newBookModel");
const createBook = async function (req, res) {
  let data = req.body;

  let savedData = await BookModel.create(data);
  res.send({ msg: savedData });
};

exports.createAuthor = async (req, res) => {
  let createAuthor = await AuthorModel.create(req.body);
  res.send(createAuthor);
};

exports.createNewBook = async (req, res) => {
  let createNewBook = await NewBookModel.create(req.body);
  res.send(createNewBook);
};
exports.getAuthors = async (req, res) => {
  let allAuthors = await AuthorModel.find();
  res.send(allAuthors);
};
exports.listOutTheBooks = async (req, res) => {
  let AuthorIDWithName = await AuthorModel.find({
    author_name: "Chetan Bhagat",
  });
  const authorID = AuthorIDWithName.map((el) => el._id);
  let listOutTheBooks = await NewBookModel.find({
    author_ID: authorID[0],
  }).select({ name: 1, _id: 0 });

  res.send(listOutTheBooks);
};

exports.newUpdateBooks = async (req, res) => {
  let AuthorIDWithName = await AuthorModel.find({
    author_name: "J.k Rowling",
  });
  const authorID = AuthorIDWithName.map((el) => el._id);
  const authorName = AuthorIDWithName.map((el) => el.author_name);
  let updateBook = await NewBookModel.findOneAndUpdate(
    { author_ID: authorID[0] },
    { $set: req.body },
    { new: true }
  ).select({ price: 1, _id: 0 });
  res.send(
    `Author Name is: ${authorName}, Updated price of book is: ${updateBook}`
  );
};
exports.findBooks = async (req, res) => {
  let findBooks = await NewBookModel.find({ price: { $gte: 50, $lte: 100 } });
  const listOfID = findBooks.map((el) => el.author_ID);
  let AuthorIDWithName = await AuthorModel.find({
    _id: listOfID.map((el) => el),
  });
  res.send(AuthorIDWithName);
};
const getBooksData = async function (req, res) {
  let allBooks = await BookModel.find({ author_name: "HO" });
  console.log(allBooks);
  if (allBooks.length > 0) res.send({ msg: allBooks, condition: true });
  else res.send({ msg: "No books found", condition: false });
};

const updateBooks = async function (req, res) {
  let data = req.body; // {sales: "1200"}
  // let allBooks= await BookModel.updateMany(
  //     { author: "SK"} , //condition
  //     { $set: data } //update in data
  //  )
  let allBooks = await BookModel.findOneAndUpdate(
    { authorName: "ABC" }, //condition
    { $set: data }, //update in data
    { new: true, upsert: true } // new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
  );

  res.send({ msg: allBooks });
};

const deleteBooks = async function (req, res) {
  // let data = req.body
  let allBooks = await BookModel.updateMany(
    { authorName: "FI" }, //condition
    { $set: { isDeleted: true } }, //update in data
    { new: true }
  );

  res.send({ msg: allBooks });
};

// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.updateBooks = updateBooks;
module.exports.deleteBooks = deleteBooks;
