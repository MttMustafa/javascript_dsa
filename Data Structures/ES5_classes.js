class Student {
    constructor(firstName,lastName,year){
        this.stuFirstName = firstName;
        this.stuLastName = lastName;
        this.stuYear = year;
        this.absent = 0;
        this.Stugrades = [];
    }
    static EnrolledStudents(name,lastname,year,grades){ //static functions are only belonges to class itself they are not related to any instanses and cannot be called from them.
        return `Name: ${name}\nLastname: ${lastname}\nAttendance Year: ${year}\nGrades: ${grades}`;
    }

    gradeData(...grades){
        this.Stugrades.push(...grades);
    }

    avgGrade(){
        let sum = this.Stugrades.reduce((a,b) => a + b);
        return sum/this.Stugrades.length
    }

    absentCounter(){
        if(this.absent >= 30){
            return 'You are expelled';
        }
        return this.absent += 1;
    }
}

let cemile = new Student("Cemile","Garagoban",2015);
cemile.age = 14; //proof of how js classes just objects


// console.log(cemile.printstudent())

// for(let i = 0; i < 31; ++i){
//     console.log(cemile.absentCounter());
// }

// console.log(cemile.absent)

cemile.gradeData(31,12,45,657,34,67);

// console.log(cemile.Stugrades);
// console.log(cemile.avgGrade());

console.log(Student.EnrolledStudents(cemile.stuFirstName,cemile.stuLastName,cemile.stuYear,cemile.Stugrades));