import {Person} from './person'
import {Discipline} from './discipline'

export class Student extends Person{
    entranceYear: string
    registrationNumber: string
    disciplines: [Discipline]
    semester: string //year.semester e.g 2018.1

    constructor(name: string, bornDate: Date, cpf: string, semester: string, entranceYear:string, ...disciplines){
        super(name, bornDate, cpf)

        this.registrationNumber = this.generateRegistrarionNumber(entranceYear)
        this.disciplines = (<[Discipline]>disciplines)
        this.semester = semester
    }

    private generateRegistrarionNumber = (year: string) => {
        let registrarionNumber: string = year

        for(let i = 0; i < 8; i++){
            registrarionNumber = registrarionNumber + (Math.round(Math.random() * 10))
        }

        return registrarionNumber
    }

    showDisciplines = () => {
        this.disciplines.forEach(discipline => {
            console.log(discipline.name)
        })
    }
}