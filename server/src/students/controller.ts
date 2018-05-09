//src/students/controller.ts
import { JsonController, Get, HttpCode, Param, NotFoundError, Post, Body, Delete, Patch, Authorized } from 'routing-controllers'
import {Students} from './entities'

@JsonController()
export default class StudentController {

    @Authorized()
    @Get('/students')
    getStudents() {
        return Students.find()
    }

    @Authorized()
    @Get('/students/:id([0-9]+)')
    async getStudentById(
        @Param('id') studentId: number
    ) {
        const student = await Students.findOneById(studentId)

        if(!student) throw new NotFoundError('No student found.')

        return student
    }

    @Authorized()
    @Post('/students')
    @HttpCode(201)
    addStudent(
        @Body() body: Students
    ) {
        return Students.create(body).save()
    }

    @Authorized()
    @Patch('/students/:id([0-9]+)')
    async updateStudent(
        @Body() update: Partial <Students>,
        @Param('id') id: number
    ) {
        const student = await Students.findOneById(id)
        
        if(!student) throw new NotFoundError('This student is not found.')

        if(update.name) student.name = update.name
        
        if(update.picture) student.picture = update.picture

        if(update.batchId) student.batchId = update.batchId

        await student.save()

        return student
    }

    @Authorized()
    @Delete('/students/:id([0-9]+)')
    async deleteStudent(
        @Param('id') id: number
    ) {
        const student = await Students.findOneById(id)
        
        if (!student) throw new NotFoundError('Student doesn\'t exist')

        if (student) Students.remove(student)
        return 'Successfully deleted'
    }
}