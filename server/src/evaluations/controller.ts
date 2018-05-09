//src/evaluation/controllers.ts
import { JsonController, Authorized, Get, Param, Body, NotFoundError, Post, HttpCode, BadRequestError, Patch } from 'routing-controllers'
import {Evaluations} from './entities'

@JsonController()
export default class EvaluationController {
    
    // @Authorized()
    @Get('/evaluation')
    getEvaluation() {
        return Evaluations.find()
    }

    // @Authorized()
    @Get('/evaluation')
    async getEvaluationByStudentId(
        @Param('studentId') studentId: number
    ) {
        const studentEval = await Evaluations.findOneById(studentId)

        if(!studentEval) throw new NotFoundError('No evaluation found for that student.')

        return studentEval
    }

    // @Authorized()
    @Post('/evaluation')
    @HttpCode(201)
    createEvaluation(
        @Body() body: Evaluations
    ) {

        const newDate = new Date(body.date)
        
        if(newDate > new Date()) throw new BadRequestError("Evaluation can't be in the future.")

        return Evaluations.create(body).save()
    }
    // @Authorized()
    @Patch('/evaluation/:id([0-9]+)')
    async updateEvaluation (
        @Body() update: Partial <Evaluations>,
        @Param('id') id: number
    ) {
        const evaluation = await Evaluations.findOneById(id)
        
        if(!evaluation) throw new NotFoundError('Evaluation not found.')

        if(update.color) evaluation.color = update.color
        
        if(update.date) evaluation.date = update.date

        if(update.remarks) evaluation.remarks = update.remarks

        if(update.questionAsked) evaluation.questionAsked = update.questionAsked

        await evaluation.save()

        return evaluation
    }

}