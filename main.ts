import {Discipline} from './discipline'
import {Teacher} from './teacher'
import {Student} from './student'

const math = new Discipline('Math', 'Teachs how to deal with numbers')
const portuguese = new Discipline('Portugese', 'Teachs portuguese')
const physics = new Discipline('Physics')

const teacher = new Teacher('João', new Date(1970, 5, 15), '123.456.789-90', math, physics)

const student = new Student('Leandro', new Date(1999, 5, 13), '098.765.432-12', '2018.1', '2017', math, portuguese)

console.log('----------------STUDENT INFO------------------')
console.log(student.name)
console.log(`${student.bornDate.getFullYear()}-${student.bornDate.getMonth() + 1}-${student.bornDate.getDate()}`)
console.log(student.showDisciplines())
console.log(student.registrationNumber)

console.log('----------------TEACHER INFO------------------')
console.log(teacher.name)
console.log(`${teacher.bornDate.getFullYear()}-${teacher.bornDate.getMonth() + 1}-${teacher.bornDate.getDate()}`)
console.log(teacher.showDisciplines())