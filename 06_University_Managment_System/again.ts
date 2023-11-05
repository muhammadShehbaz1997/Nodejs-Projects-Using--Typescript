class Person {
    name: string;
    age: number;

    constructor(name: string, age :number){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
}

class Student extends Person {
    rollNum : number;
    courses : Course [] =  []

    constructor(name: string,age: number,rollNum :number){
        super(name,age)
        this.rollNum = rollNum
    }
    registerFor_Courses(course: Course){
        this.courses.push(course)
    }
};

class Instructor extends Person {
    salary: number;
    courses  :Course [] = [];

    constructor(name : string, age :number, salary :number){
        super(name, age)
        this.salary = salary
    };

    assign_Course(course: Course){
        this.courses.push(course)
        
    };
};

class Course {
    id: number;
    name: string;
    students : Student[] = [];
    instructors : Instructor[] = []

    constructor(id: number, name : string){
        this.id = id;
        this.name = name;
    };

    add_Students (student : Student){
        this.students.push(student)
        student.registerFor_Courses(this)
    };
    set_Instructor (instroctor : Instructor){
        this.instructors.push(instroctor)
        instroctor.assign_Course(this)
    };
};

class Department {
    name : string
    courses : Course[]= []

    constructor(name : string){
        this.name = name
    };

    assigncourse(coursing: Course){
        this.courses.push(coursing)
    };
};

const student1  = new Student("Muammad Qasim Awan", 18,2001);
const student2  = new Student("Joprah Archer", 40,2002);
// student1.registerFor_Courses("English Language")
// student2.registerFor_Courses("Chiness Language")

const instructor1 = new Instructor("Zia khan",40, 1000000)
const instructor2 = new Instructor("Sir Muhammad Qasim",30, 5000000)
// instructor1.assign_Course("Metaverse")
// instructor2.assign_Course("Panaverse")

const course1 = new Course(101, "Artificial Intellegence And Computing")
course1.add_Students(student1);
course1.add_Students(student2);

course1.set_Instructor(instructor1)
// console.log(course1);

const depat = new Department("Computer Science")
depat.assigncourse(course1 )
console.log(depat);
console.log(course1.students);







