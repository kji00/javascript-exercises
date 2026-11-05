const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function (arr) {
  const newArr = arr.filter( item => Object.hasOwn( item, "title" ))
                    .map( item => item.title );
  return newArr;
};

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
