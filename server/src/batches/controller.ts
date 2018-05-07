//src/batches/controller.ts
import { JsonController, Get, HttpCode, Param, NotFoundError, Post, Body } from 'routing-controllers'
import {Batches} from './entities'

@JsonController()
export default class BatchController {

    //add  @Authorized()
    @Get('/batches')
    getBatches() {
        return Batches.find()
    }

    //add  @Authorized()
    @Get('/batches/:id')
    async getBatchById(
        @Param('id') id: number
    ) {
        const batchById = await Batches.findOneById(id)

        if (!batchById) throw new NotFoundError('Batch doesn\'t exist')
        if (batchById) return batchById    
    }

    //add  @Authorized()
    @Post('/batches')
    @HttpCode(201)
    createBatch(
        @Body() body: Batches 
    ){
        return Batches.create(body).save()
    }
}
