// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { firstName: "An", lastName: "lo", batch: "A", age: 20 },
  { firstName: "Bình", lastName: "Tean", batch: "B", age: 22 },
  { firstName: "Cẩm", lastName: "Le", batch: "C", age: 21 },
  { firstName: "An", lastName: "hoka", batch: "D", age: 19 },
  { firstName: "Hi", lastName: "Do", batch: "E", age: 18 }
];


/**
 * Update 1 student age,first name, last name, and batch
 * @param {string} firstName - student first name
 * @param {string} lastName - student last name
 * @param {string} batch - student batch
 * @param {number} newAge  - student new age
 */
function updateStudentAge(firstName, lastName, batch, newAge) {
  let student = STUDENTS_DATA.find(
    (s) => s.firstName === firstName && s.lastName === lastName && s.batch === batch
  );
  if (student) {
    student.age = newAge;
  }
}


// 1 - Update An lo (batch A) age to 30
updateStudentAge("An", "lo", "A", 30);

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA));
