// MAIN TREE
class human {
    name:string
    age:number
    gender:string
    address:string

    constructor(){

    }

    showInfo(): void{
        let _html = `Person: ${this.name}<br>
            Age: ${this.age}<br>
            Gender: ${this.gender}<br>
            Address: ${this.address}<br>`

        document.getElementById("showInfo").innerHTML = (_html)

    }
}

// EMPLOYEE TREE
class employee extends human {
    id:string
    salery:number
    daysEmployed:number
    
    constructor(){
        super();
    }

    showInfo(): void {
        let _html = `
            ID: ${this.id}<br>
            Name: ${this.name}<br>
            Age: ${this.age}<br>
            Gender: ${this.gender}<br>
            Address: ${this.address}<br>
            Salery: ${this.salery}<br>
            Days Employed: ${this.daysEmployed}<br>
            Actual Salery: ${this.calcSalery()}<br>
        `

        document.getElementById("showInfo").innerHTML = (_html)
    }

    calcSalery(): number {
        return this.daysEmployed * this.salery
    }
}


// STUDENT TREE
class student extends human {
    id:string
    grade1:number
    grade2:number
    grade3:number
    
    showInfo():void {
        
        let _html = `
            ID: ${this.id} <br>
            Name: ${this.name}<br>
            Gender: ${this.gender}<br>
            Address: ${this.address}<br>
            Average Grade: ${this.averageGrade()}<br>  
            Ranking: ${this.ranking()}<br>
        `
        
        document.getElementById("showInfo").innerHTML = _html
    }

    averageGrade():number {
        return (this.grade1+this.grade2+this.grade3)/3
    }

    ranking():string {
        let averageGrade = Number(this.averageGrade) 

        if (averageGrade > 7) {
            return "Good"
        }
        else if (averageGrade > 5) {
            return "Med"
        }
        else if (averageGrade > 3) {
            return "Bad"
        }
        else return "Fail"
    }

    test(){document.getElementById("showInfo").innerHTML = "hello"
}
}


// THIS IS 
// A TEST AREA 

// EXAMPLE 
let student1 = new student 

student1.name = "A"
student1.age = 1
student1.gender = "M"
student1.address = "AA"
student1.id = "01"
student1.grade1 = 1
student1.grade2 = 2
student1.grade3 = 3

// SHOWING 
student1.showInfo();
