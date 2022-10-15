// const d = Da;
// const month = Date.getMonth();
// console.log(month);
let today = new Date();
let day;
//Print Date

const printDate = function () {
  day = String(today.getDate());
  return day;
};
printDate();
//Print Month
let week = 0;
if (day >= 1 && day <= 7) {
  week = 1;
}
if (day > 7 && day <= 14) {
  week = 2;
}
if (day > 14 && day <= 21) {
  week = 3;
}
if (day > 21 && day <= 28) {
  week = 4;
}
if (day > 28 && day <= 31) {
  week = 5;
}

const printMonth = function () {
  let month = String(today.getMonth());
  if (month == 0) {
    month = "January";
  }
  if (month == 1) {
    month = "February";
  }
  if (month == 2) {
    month = "March";
  }
  if (month == 3) {
    month = "April";
  }
  if (month == 4) {
    month = "May";
  }
  if (month == 5) {
    month = "June";
  }
  if (month == 6) {
    month = "July";
  }
  if (month == 7) {
    month = "August";
  }
  if (month == 8) {
    month = "September";
  }
  if (month == 9) {
    month = "October";
  }
  if (month == 10) {
    month = "November";
  }
  if (month == 11) {
    month = "December";
  }
  return month;
};
printMonth();
//Batch-info

const getBatchInfo = function () {
  return `Lithium, week ${week}, Day ${day}, the topic being taught today is Nodejs module system`;
};

//exporting functions
module.exports.getBatchInfo = getBatchInfo;
module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
