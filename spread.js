const obj = {
  name: "Olex",
  age: 41,
};

//копирование объектов через спред оператор
const obj2 = { ...obj };
obj2.name = "Petya";
obj2.age = 33;
console.log(obj, obj2);

const obj3 = {
  isActive: false,
  balance: "$3,380.22",
  picture: "http://placehold.it/32x32",
  age: 27,
  eyeColor: "brown",
};

console.log(obj3.picture);

const obj4 = { ...obj3 };
console.log(obj4);
