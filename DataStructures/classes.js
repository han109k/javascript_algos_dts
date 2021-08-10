class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.absence = 0;
    this.scores = [];
  }

  //* instance methods
  fullName() {
    return `Your name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.absence += 1;
    return `${this.firstName} ${this.lastName} has been absent ${this.absence} times.`
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    let sum = this.scores.reduce((a,b) => a + b);
    return sum / this.scores.length;
  }
  
  //* class methods
  static enrollStudents() {
    return "Enrolling Students"
  }
}

// Creating object instance
let firstStudent = new Student("John", "Smith");
console.log(firstStudent);
firstStudent.grade = 3;
console.log(firstStudent);

console.log(firstStudent.fullName());

console.log(firstStudent.markLate());

firstStudent.addScore(43);
firstStudent.addScore(76);
firstStudent.addScore(70);

console.log(firstStudent.calculateAverage());

// Class methods
console.log(Student.enrollStudents());