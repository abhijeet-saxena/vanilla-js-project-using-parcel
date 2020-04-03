import { square } from "./src/scripts/lib";
import "./src/styles/main.css";

const a = [1, 2, 3, 4];

console.log([...a]);

document.getElementById("message").innerText = "Hello World!";

document.getElementById("message").innerText = `The Square of 2 is ${square(
  2
)}`;
console.log(
  a.map(item => {
    console.log(item);
    return item * 2;
  })
);

const ab = async () => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  ).then(response => response.json());
  console.log(data);
};

ab();
