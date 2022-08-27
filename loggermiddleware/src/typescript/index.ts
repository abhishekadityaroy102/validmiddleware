let name1: string = "Abhishek kumar";

let age: number = 20;

let isFetching: boolean = false;

let arr: Array<number> = [1, 3,2,2, 3];

//tuple
let employee: [string, boolean] = ["Ritesh", true];

const sum = (a: number, b: number): number => a * b;

sum(1, 3);

//enum

enum employees {
  User = 1,
  superUser = 4,
  admin = 6,
  Superadmin = 8,
}

//ASSIGNMENT 2

interface Obj {
  title: string;
  status: boolean;
  id: number;
}

interface Details {
  firstName: string;
  lastName?: string;
}

const a: Details = {
  firstName: "abhishek",
  lastName: "kumar",
};

const getName = () => {
  return a.firstName;
};

let ans = getName();
console.log(ans);

//3.

interface Address {
  houseNumber: number;
  street: string;
  city: string;
  state: string;
  postalCode: number;
  country: string;
}

//4.
interface PersonDetails {
  prefix?: string;
  phoneNumber: number;
  address: Array<Address>;
  email?: string;
  firstName: string;
  lastName: string;
  middleName?: string;
}

5;

const my: PersonDetails = {
  prefix: "mr.",
  phoneNumber: 123,
  address: [
    {
      houseNumber: 234,
      street: "trreuy",
      city: "mahh",
      state: "bihar",
      postalCode: 55666,
      country: "India",
    },
  ],
  firstName: "abhishek",
  lastName: "kumar",
};

let phoneBookArray = [];

const phoneBook = (my) => {
  phoneBookArray.push();
};

let answer = phoneBook(my);
console.log(phoneBookArray);