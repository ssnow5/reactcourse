let age: number;
age = 12;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

let hobbies: string[];
hobbies = ['1', '2', '3'];

type Person = {
  name: string;
  age: number;
};

let person: Person;
person = {
  name: 'Max',
  age: 32,
};

// person = {
//   isEmployee: true,
// };

let people: Person[];

let course: string | number = 'React - Complete Course';
course = 1;

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

function insertAtBegining<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBegining(demoArray, -1);
//updatedArray[0].split('');

const stringArray = insertAtBegining(['1', '2', '3'], '-1');
stringArray[0].split('');
