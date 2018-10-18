import {Person} from './person'
import {Discipline} from './discipline'

export class Teacher extends Person{
    disciplines: [Discipline]

    constructor(name: string, bornDate: Date, cpf: string, ...disciplines){
        super(name, bornDate, cpf)

        this.disciplines = (<[Discipline]>disciplines)
    }

    showDisciplines = () => {
        this.disciplines.forEach(discipline => {
            console.log(discipline.name)
        })
    }
}