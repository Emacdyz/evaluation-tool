//src/students/controller.ts
import { JsonController, Get, HttpCode, Param, NotFoundError, Post, Body } from 'routing-controllers'
import {Students} from './entities'

@JsonController()
export default class StudentController {

    // @Authorized()
    @Get('/students')
    getStudents() {
        return Students.find()
    }

    // @Authorized()
    @Get('/students/:id([0-9]+)')
    async getStudentById(
        @Param('id') studentId: number
    ) {
        const student = await Students.findOneById(studentId)

        if(!student) throw new NotFoundError('No student found.')

        // student.evaluations.sort((a, b) => {
        //     return Number(new Date(b.date)) - Number(new Date(a.date))
        // })

        return student
    }

     // @Authorized()
    @Post('/batches/:id([0-9]+)/students')
    @HttpCode(201)
    async addStudent(
        @Body() body: Students
    ) {
        const student = await Students.create(body).save()

    return Students.findOne({where: {id: student.id}, relations: ['evaluations']})
  }
}