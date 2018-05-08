//src/students/controller.ts
import { JsonController, Get, HttpCode, Param, NotFoundError, Post, Body, Delete, Patch } from 'routing-controllers'
import {Students} from './entities'

@JsonController()
export default class StudentController {

    // @Authorized()
    @Get('/batches/students/:batchId')
    async getStudentsByBatch(
        @Param('batchId') batchId: number
    ) {
        const batches = await Students.findOneById(batchId)
        return Students.find(batches)
    }
    //by batchNb ??

    // @Authorized()
    @Get('/students/:id([0-9]+)')
    async getStudentById(
        @Param('id') studentId: number
    ) {
        const student = await Students.findOneById(studentId)

        if(!student) throw new NotFoundError('No student found.')

        return student
    }

     // @Authorized()
    @Post('/students')
    @HttpCode(201)
    async addStudent(
        @Body() body: Students
    ) {
        const student = await Students.create(body).save()

        return student
    }

    // @Authorized()
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

    // @Authorized()
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