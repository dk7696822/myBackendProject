const express = require("express");
const router = express.Router(); ///test-you
const lodash = require("lodash");
//importing a custom module
const welcomeFirstAssignment = require("../logger/logger");
const helper = require("../util/helper");
const trimLowerCaseUpperCase = require("../validator/formatter");
//importing external package
// const underscore = require("underscore");

router.get("/test-me", function (req, res) {
  // Calling the components of a different custom module
  //   console.log("Calling my function ", xyz.myFunction());
  //   console.log("The value of the constant is ", xyz.myUrl);
  //Trying to use an external package called underscore
  //   let myArray = ["Akash", "Pritesh", "Sabiha"];
  //   let result = underscore.first(myArray);
  //   console.log("The result of underscores examples api is : ", result);
  //Problem 4-1
  const moment = require("moment");

  const months = moment.months();

  console.log(lodash.chunk(months, 4));
  //Problem 4-2
  let i = 0;
  const arr = [];
  while (i < 30) {
    if (i % 2 != 0) {
      arr.push(i);
    }
    if (arr.length == 10) {
      break;
    }
    i++;
  }
  console.log(lodash.tail(arr));
  //Problem 4-3
  const arr1 = [1, 2, 3, 4];
  const arr2 = [3, 4];
  const arr3 = [4, 5, 6];
  const arr4 = [3, 4, 6, 8];
  const arr5 = [1, 2, 5, 6, 7];
  console.log(lodash.union(arr1, arr2, arr3, arr4, arr5));
  //Problem 4-4
  const keyValue = [
    ["horror", "The Shining"],
    ["drama", "Titanic"],
    ["thriller", "Shutter Island"],
    ["fantasy", "Pans Labyrinth"],
  ];
  console.log(lodash.fromPairs(keyValue));

  //Problem 1
  console.log(welcomeFirstAssignment.welcome());
  //Problem 2
  console.log(
    `Today's date is ${helper.printDate()}th of ${helper.printMonth()}`
  );
  console.log(`We are in the month of ${helper.printMonth()}`);

  console.log(helper.getBatchInfo());
  //Problem 3
  console.log(trimLowerCaseUpperCase.trimString());
  console.log(trimLowerCaseUpperCase.changeToLowerCase());
  console.log(trimLowerCaseUpperCase.changeToUpperCase());
  res.send("My first ever api!");

  //To be tried what happens if we send multiple response
  //res.send('My second api!')
});

module.exports = router;
