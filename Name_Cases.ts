//Name Cases: Store a person's name in a variable, and then print that person's name in lowercase.

let PersonName: string = "Muhammad Adnan";

//in lowercase
console.log("Lowercase:" , PersonName. toLowerCase());

//in uppercase
console.log("uppercase:", PersonName.toUpperCase());

//title case
console.log("titlecase:", PersonName.replace(/\b\w/g,c=> c.toUpperCase()));
