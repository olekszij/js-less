const users = [
  { name: "Alex", age: 41 },
  { name: "Oleg", age: 49 },
  { name: "Volod", age: 19 },
];
const modifiedUser = users.map((user) => user.name);
const filtredUser = users
  .filter((user) => user.age >= 30)
  .map((user) => user.name);
console.log(filtredUser);
console.log(modifiedUser);

const todos = [
  {
    id: 1,
    text: "RDV 9:00 AM",
    isCompleted: true,
  },
  {
    id: 2,
    text: "RDV 13:00 PM",
    isCompleted: false,
  },
  {
    id: 3,
    text: "RDV 16:00 PM",
    isCompleted: false,
  },
];

// Map
const todoText = todos.map((todo) => todo.text);
console.log(todoText);

const completed = todos.map((comp) => comp.isCompleted);
console.log(completed);
