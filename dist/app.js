// MAIN TREE
class human {
    constructor() {
    }
    showInfo() {
        let _html = `Person: ${this.name}<br>
            Age: ${this.age}<br>
            Gender: ${this.gender}<br>
            Address: ${this.address}<br>`;
        document.getElementById("showInfo").innerHTML = (_html);
    }
}
// EMPLOYEE TREE
class employee extends human {
    constructor() {
        super();
    }
    showInfo() {
        let _html = `
            ID: ${this.id}<br>
            Name: ${this.name}<br>
            Age: ${this.age}<br>
            Gender: ${this.gender}<br>
            Address: ${this.address}<br>
            Salery: ${this.salery}<br>
            Days Employed: ${this.daysEmployed}<br>
            Actual Salery: ${this.calcSalery()}<br>
        `;
        document.getElementById("showInfo").innerHTML = (_html);
    }
    calcSalery() {
        return this.daysEmployed * this.salery;
    }
}
// STUDENT TREE
class student extends human {
    showInfo() {
        let _html = `
            ID: ${this.id} <br>
            Name: ${this.name}<br>
            Gender: ${this.gender}<br>
            Address: ${this.address}<br>
            Average Grade: ${this.averageGrade()}<br>  
            Ranking: ${this.ranking()}<br>
        `;
        document.getElementById("showInfo").innerHTML = _html;
    }
    averageGrade() {
        return (this.grade1 + this.grade2 + this.grade3) / 3;
    }
    ranking() {
        let averageGrade = Number(this.averageGrade);
        if (averageGrade > 7) {
            return "Good";
        }
        else if (averageGrade > 5) {
            return "Med";
        }
        else if (averageGrade > 3) {
            return "Bad";
        }
        else
            return "Fail";
    }
    test() {
        document.getElementById("showInfo").innerHTML = "hello";
    }
}
// THIS IS 
// A TEST AREA 
// EXAMPLE 
let student1 = new student;
student1.name = "A";
student1.age = 1;
student1.gender = "M";
student1.address = "AA";
student1.id = "01";
student1.grade1 = 1;
student1.grade2 = 2;
student1.grade3 = 3;
// SHOWING 
student1.showInfo();
