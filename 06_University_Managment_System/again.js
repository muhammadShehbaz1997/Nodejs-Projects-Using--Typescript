class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    rollNum;
    courses = [];
    constructor(name, age, rollNum) {
        super(name, age);
        this.rollNum = rollNum;
    }
    registerFor_Courses(course) {
        this.courses.push(course);
    }
}
;
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    ;
    assign_Course(course) {
        this.courses.push(course);
    }
    ;
}
;
class Course {
    id;
    name;
    students = [];
    instructors = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    ;
    add_Students(student) {
        this.students.push(student);
        student.registerFor_Courses(this);
    }
    ;
    set_Instructor(instroctor) {
        this.instructors.push(instroctor);
        instroctor.assign_Course(this);
    }
    ;
}
;
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    ;
    assigncourse(coursing) {
        this.courses.push(coursing);
    }
    ;
}
;
const student1 = new Student("Muammad Qasim Awan", 18, 2001);
const student2 = new Student("Joprah Archer", 40, 2002);
// student1.registerFor_Courses("English Language")
// student2.registerFor_Courses("Chiness Language")
const instructor1 = new Instructor("Zia khan", 40, 1000000);
const instructor2 = new Instructor("Sir Muhammad Qasim", 30, 5000000);
// instructor1.assign_Course("Metaverse")
// instructor2.assign_Course("Panaverse")
const course1 = new Course(101, "Artificial Intellegence And Computing");
course1.add_Students(student1);
course1.add_Students(student2);
course1.set_Instructor(instructor1);
// console.log(course1);
const depat = new Department("Computer Science");
depat.assigncourse(course1);
console.log(depat);
console.log(course1.students);
export {};
