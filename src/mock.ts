// Note. the double quote is no longer on some keys because my editor removed them where it wasn't necessary
// Type for the person object
export interface Person {
  Name: string;
  "Favorite Food": string;
  "Favorite Movie": string;
  Status: "Active" | "Inactive";
  Date?: Date; // Optional date property, because the original object doesn't had it
}

// Existing objects for other individuals
const rockyObj: Person = {
  Name: "Rocky",
  "Favorite Food": "Sushi",
  "Favorite Movie": "Back to The Future",
  Status: "Inactive",
};

const miroslavObj: Person = {
  Name: "Miroslav",
  "Favorite Food": "Sushi",
  "Favorite Movie": "American Psycho",
  Status: "Active",
};

const donnyObj: Person = {
  Name: "Donny",
  "Favorite Food": "Singapore chow mei fun",
  "Favorite Movie": "The Princess Bride",
  Status: "Inactive",
};

const mattObj: Person = {
  Name: "Matt",
  "Favorite Food": "Brisket Tacos",
  "Favorite Movie": "The Princess Bride",
  Status: "Active",
};
// here is my custom object
const marioObj: Person = {
  Name: "Mario",
  "Favorite Food": "Hamburguer",
  "Favorite Movie": "fast & furious",
  Status: "Active",
};

// this is the array of objects
const peopleArray = [rockyObj, miroslavObj, donnyObj, mattObj, marioObj];

export default peopleArray;
