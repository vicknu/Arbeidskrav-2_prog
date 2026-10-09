const students = [
    { name: "Alice", age: 20, grade: "6", workexperience: 2 },
    { name: "Bob", age: 22, grade: "5", workexperience: 1 },
    { name: "Charlie", age: 19, grade: "4", workexperience: 0 },
    { name: "David", age: 21, grade: "5", workexperience: 3 },
    { name: "Eve", age: 23, grade: "6", workexperience: 4 },
    { name: "Frank", age: 20, grade: "3", workexperience: 1 },
    { name: "Grace", age: 22, grade: "2", workexperience: 2 },
    { name: "Hannah", age: 39, grade: "1", workexperience: 5 },
    { name: "Ian", age: 21, grade: "4", workexperience: 1 },
    { name: "Jack", age: 23, grade: "5", workexperience: 3 },
    { name: "Kathy", age: 20, grade: "6", workexperience: 4 },
    { name: "Liam", age: 22, grade: "3", workexperience: 2 },
    { name: "Mia", age: 19, grade: "2", workexperience: 1 },
    { name: "Noah", age: 21, grade: "1", workexperience: 0 },
    { name: "Olivia", age: 23, grade: "4", workexperience: 3 },
    { name: "Paul", age: 40, grade: "5", workexperience: 10 },
    { name: "Quinn", age: 22, grade: "6", workexperience: 0 },
    { name: "Ryan", age: 19, grade: "3", workexperience: 0 },
    { name: "Sophia", age: 21, grade: "2", workexperience: 0 },
    { name: "Tyler", age: 23, grade: "1", workexperience: 0 }
];

//Utskrift antall studenter #studentCount
document.getElementById("studentCount").innerHTML=students.length

const grades = [
    { letter: "A", score: 6 },
    { letter: "B", score: 5 },
    { letter: "C", score: 4 },
    { letter: "D", score: 3 },
    { letter: "E", score: 2 },
    { letter: "F", score: 1}
];

//Gjennomsnittskarakter (som bokstavkarakter) og rundet opp. 

const scores = students.map(student => Number(student.grade));
const sum = scores.reduce ((acc, value) => acc + value, 0);
const average = sum / scores.length; 
const roundedAverage = Math.ceil(average);

function numberToLetter(num){
    if (num === 6) return "A";
    if (num === 5) return "B";
    if (num === 4) return "C";
    if (num === 3) return "D";
    if (num === 2) return "E";
    if (num === 1) return "F";

}

const letterGrade = numberToLetter(roundedAverage);

document.querySelector("#averageGrade").innerHTML = letterGrade; 

//Opptelt og skrevet ut hver karakter
const gradeCount = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
};

students.forEach(student => {
    const gradeNumber = Number(student.grade);
    if(gradeNumber === 6) gradeCount.A++;
    if(gradeNumber === 5) gradeCount.B++;
    if(gradeNumber === 4) gradeCount.C++;
    if(gradeNumber === 3) gradeCount.D++;
    if(gradeNumber === 2) gradeCount.E++;
    if(gradeNumber === 1) gradeCount.F++;

});

document.querySelector("#gradeA").innerHTML = gradeCount.A;
document.querySelector("#gradeB").innerHTML = gradeCount.B;
document.querySelector("#gradeC").innerHTML = gradeCount.C;
document.querySelector("#gradeD").innerHTML = gradeCount.D;
document.querySelector("#gradeE").innerHTML = gradeCount.E;
document.querySelector("#gradeF").innerHTML = gradeCount.F;

//Regnet ut og skrevet ut gjennomsnittsalder - #averageAge
const ages = students.map(student => student.age);
const ageSum = ages.reduce((acc, value) => acc + value, 0);
const averageAge = ageSum / ages.length; 
const roundedAverageAge = averageAge.toFixed(2);

document.querySelector("#averageAge").innerHTML = roundedAverageAge;


//Opptelt og skrevet ut antall studenter rett fra VGS - #highSchool
const highSchoolCount = students.filter(student => student.age === 19).length;

document.querySelector("#highSchool").innerHTML = highSchoolCount;


//Opptelt og skrevet ut antall studenter med yrkeserfaring - #workExperience
const workExperienceCount = students.filter(student => student.workexperience >= 1).length;

document.querySelector("#workExperience").innerHTML = workExperienceCount;




