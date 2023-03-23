console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById(“node1”) method to access this";
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const node2 = document.getElementsByClassName("node2")[0];
node2.textContent =
  "I used the getElementsByClassName(“node2”) method to access this";
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const node3 = document.getElementsByTagName("h3");
console.log(node3);
Array.from(node3).forEach(function (e) {
  e.textContent =
    "I used the getElementByTagName('h3') method to access all of these";
});
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let p = document.createElement("p");
p.textContent = "This node was created using the createElement() method";
// TODO: Append the created node to the parent node using the element.appendChild() method
let parent = document.getElementById("parent");
parent.appendChild(p);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let a = document.createElement("a");
a.textContent = "I am a <a> tag";

parent.insertBefore(a, p);
// BONUS: Add a link href to the <a>
a.href = "facebook.com";
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const parent1 = document.getElementById("exercise-container3");
const child1 = document.getElementById("N1");
let p1 = document.createElement("p");
p1.textContent = "New Child Node";

parent1.replaceChild(p1, child1);
// TODO: Remove the "New Child Node"
setTimeout(() => {
  parent1.removeChild(p1);
}, 5000);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

// TODO: Create an unordered list element
const parent2 = document.getElementById("container");
let ul = document.createElement("ul");
parent2.appendChild(ul);
// TODO: Iterate over the array values, and create a list item element for each
// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4
const ul1 = document.getElementsByTagName("ul")[0];
list.forEach((e) => {
  let li = document.createElement("li");
  li.textContent = e;
  ul1.appendChild(li);
});

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
const btn = document.getElementById("btn");
btn.addEventListener("click", show);
function show() {
  console.log("click");
  let div = document.createElement("div");
  let innerDiv = document.createElement("div");
  let p = document.createElement("p");
  let btn1 = document.createElement("button");
  p.textContent =
    "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
  div.setAttribute("id", "modal");
  p.setAttribute("class", "modal-card");
  innerDiv.setAttribute("class", "modal-card");
  innerDiv.appendChild(p);
  btn1.textContent = "Close";
  innerDiv.appendChild(btn1);
  div.appendChild(innerDiv);
  document.body.appendChild(div);
  btn1.addEventListener("click", remove);
  div.addEventListener("click", remove);
}

let remove = function (e) {
  console.log(this);
  let div = document.getElementById("modal");
  if (this == e.target) {
    document.body.removeChild(div);
  }
};
