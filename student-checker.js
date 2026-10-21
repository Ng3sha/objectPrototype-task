function student(name, age, course, score){
    this.name = name,
    this.age = age,
    this.course = course,
    this.score = score
}

// Prototype introduce
student.prototype.introduce = function(){
    return `Hi! am ${this.name}, and am ${this.age} year's old, i study ${this.course} and my score is ${this.score}`
}

// Prototype getResult
student.prototype.getResult = function(){
    return this.score >= 50 && this.score <=100 ? "Pass" : "Fail"
};

// Prototype updateScore
student.prototype.updateScore = function(newScore){
    this.score = newScore
    return this.score
};

// Prototype getGrade
student.prototype.getGrade = function(){
    if (this.score >= 80 && this.score <= 100){
        return "A"
    } else if (this.score >= 70){
        return "B"
    } else if (this.score >= 60){
        return "C"
    } else if (this.score >= 50){
        return "D"
    }  else if (this.score < 50){
        return "F"
    } else {
        return "invaild"
    }
};

// Student data declaration
const student1 = new student("Raphael", 25, "HTML", 80);

const student2 = new student("Sesugh", 23, "Tailwind", 73);

const student3 = new student("Martins", 22, "Javascript", 63);

const students = [student1, student2, student3]

// highest student
const highest = students.reduce((max, student) => (student.score > max.score ? student : max));

// lowest student
const lowest = students.reduce((min, student) => (student.score < min.score ? student : min));

// average score
const average = students.reduce((sum, student) => sum + student.score, 0) / students.length

console.log(student1.introduce())
console.log(student2.introduce())
console.log(student3.introduce())


console.log("studentResult:", student1.name, student1.getResult());
console.log("studentResult:", student2.name, student2.getResult());
console.log("studentResult:", student3.name, student3.getResult());

console.log("Updatescore:", student2.name ,student2.updateScore(30), student2.getGrade())

// getGrade
students.forEach((student) => {
    console.log(student.name,student.score, student.getGrade());
    });

console.log("HighestScore:", highest.name, highest.score)
console.log("LowestScore:", lowest.name, lowest.score)
console.log("ClassAverage:", average)

console.log("student1 has own prototype?:",  student1.hasOwnProperty("introduce"))
console.log("student share the same prototype?:", student.prototype.hasOwnProperty("introduce"))


console.log("students share the same prototype?:", Object.getPrototypeOf(student1) === Object.getPrototypeOf(student2))
