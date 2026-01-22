// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { firstName: "An", lastName: "Nguyen", batch: "A", age: 20 },
  { firstName: "Bình", lastName: "Tran", batch: "B", age: 22 },
  { firstName: "Cẩm", lastName: "Le", batch: "A", age: 21 },
  { firstName: "An", lastName: "Pham", batch: "B", age: 19 },
  { firstName: "Hi", lastName: "Do", batch: "A", age: 18 }
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


// 1 - Update An Nguyen (batch A) age to 30
updateStudentAge("An", "Nguyen", "A", 30);

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA));
