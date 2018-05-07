//src/batches/entities.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import {IsDateString} from "class-validator";
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export class Batches extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('integer', {nullable: true})
    batchNb: number

    @IsDateString()
    @Column('date', {nullable: true})
    startDate: Date 

    @IsDateString()
    @Column('date', {nullable: true})
    endDate: Date

}