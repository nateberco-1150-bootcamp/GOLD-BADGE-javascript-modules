// /*
// intro to DOM

// syntax:
//     document.getElementbyId('[type here])
//     document.querySelectorAll('[type here]')

//     let header =
//     document.getElementbyId('[aboutme]');
//     */


// //ID Grab
//     const header = document.getElementById("header")
//     console.log(header);

// header.style.color = "pink"; 
// header.innerText = "Hello World";
// //--------------
// //Class Grab
// const errorList = document.getElementsByClassName('error-list');
// console.log(errorList);

// errorList[1].innerText = "I changed error 2";
// //Example 1 Looping
// for (let i = 0; i < errorList.length; i++){
//     errorList[i].style.color = "red";
// }

// //Example 2 Looping
// for(error of errorList){
//     error.style.color = "green";
// }

// //***For Each loops do NOT work for this query method!!! */
// //-------------
// //Grab by TAG
// //const tags = document.getElementsByTagName('p')

// const tags = document.getElementsByTagName('p');
// console.log(tags);
// tags[0].innerText = "xoxoxoxoxoxoxoxo I changed the paragraph by using getElementsByTagName!";

// const listItems = document.getElementsByTagName('li');
// console.log(listItems);

// // listItems[0].style.fontStyle = "italic";
// // listItems[1].style.fontStyle = "italic";

// for (let i = 0; i < listItems.length; i++){
// listItems[i].style.fontStyle = "italic";
// }

//-----------------
//querySelector()
const header = document.querySelector('h1');
console.log(header);

const errorList = document.querySelector(".error-list");
console.log(errorList);

const errorList2 = document.querySelector("bod7 > div > ul > li:nth-child(2)");
console.log(errorList2);

//--------------------
//querySelectorAll()

const listItems = document.querySelectorAll('.error-list');
 
const headerTags = document.querySelectorAll("h1");
console.log(headerTags);

console.log(headerTags[1]);

// headerTags.forEach((h) => {
//     h.style.color = "blue";
// });

const listItems = document.querySelectorAll(".error-list");

listItems.forEach(li => {
    li.style.fontStyle = "italic";
});
