/*
BASICS OF DOM OBJECT

let val;

val = document;
val = document.all;
val = document.all.length;
val = document.all.domain;
 document.URL, val = document.characterSet;

val = document.forms[0].id;
document.forms[0].method, document.forms[0].action

val = document.links[0].className;
vall = document.scripts[2].getAttribute("src");

let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function (script) {
  console.log(script.getAttribute("src"));
});

console.log(val);
*/

/*

DOM SELECTORS FOR SINGLE ELEMENT

document.getElementById

taskTitle = document.getElementById("task-title");

taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";

document.getElementById("task-title").style.display = "none";

taskTitle.textContent = "My Tasks";
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

document.querySelector()

document.querySelector("li").style.color = "red";
document.querySelector("li:last-child").style.color = "blue";
document.querySelector("li:nth-child(3)").style.color = "yellow";
document.querySelector("li:nth-child(odd)").style.background = "#ccc";

*/

/*

DOM SELECTORS FOR MULTIPLE ELEMENTS 

 document.getElementsByClassName

let items = document.getElementsByClassName("collection-item");
console.log(items);
items[0].style.color = "red";

document.querySelectorAll;

const items = document.querySelectorAll("ul.collection li.collection-item");
items.forEach(function (item, index) {
  item.textContent = `${index} : Hello`;
});

console.log(items);

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function (li) {
  li.style.background = "#ccc";
});

for (let i; i < liEven.length; i++) {
  liEven[i].style.background = "#f4f4f4";
}

*/

/*
TRAVERSING THE DOM
let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

 get child nodes
val = list.childNodes; // this is a node-list

get children element nodes
val = list.children; // this is a html-collection

console.log(val);
*/

/*
creating an element

const li = document.createElement("li");
Adding a class
li.className = "collection-item";
li.id = "new-id";
li.setAttribute("title", "New Item");

create textnode and append
li.appendChild(document.createTextNode("Hello World"));
append li as child to ul
document.querySelector("ul.collection").appendChild(li);

create new link element
const link = document.createElement("a");
link.className = "delete-item secondary-content";
link.innerHTML = '<em class="fa fa-remove"></em>';
li.appendChild(link);

console.log(li);
*/

/*
Remove and Replace Element

Create a new heading
const newHeading = document.createElement("h2");
newHeading.id = "task-title";
newHeading.appendChild(document.createTextNode("Task List"));

Get the old headinng
const oldHeading = document.getElementById("task-title");
const cardAction = document.querySelector(".card-action");

Replace
cardAction.replaceChild(newHeading, oldHeading);

Remove Element
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");
lis[0].remove();

Remove Child
list.removeChild(lis[3]);

Class & Attr
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];
console.log(link);

let val = link.setAttribute("href", "http://google.com");
*/

//Event Listners and Event Object

//document.querySelector(".clear-tasks").addEventListener("click", onClick);

const card = document.querySelector(".card");
const heading = document.querySelector("h5");

card.addEventListener("mousemove", runEvent);

function runEvent(e) {
  //console.log("Hello-World");
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

// Event bubbling

document.querySelector(".card-title").addEventListener("click", function () {
  console.log("card-title");
});

document.querySelector(".card-content").addEventListener("click", function () {
  console.log("card-content");
});

// Event Delegation
document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  // if (e.target.parentElement.className === "delete-item secondary-content")
  //   console.log("delete item");

  if (e.target.parentElement.classList.contains("delete-item"))
    e.target.parentElement.parentElement.remove();
}

// Local Storage
document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.getElementById("task").value;

  let tasks =
    localStorage.getItem("tasks") === null
      ? []
      : JSON.parse(localStorage.getItem("tasks"));

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("task saved");

  e.preventDefault();
});

const tasksArr = JSON.parse(localStorage.getItem("tasks"));
tasksArr.forEach(function (task) {
  console.log(task);
});
