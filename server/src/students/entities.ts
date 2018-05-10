//src/students/entities.ts
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import {IsString, IsUrl} from "class-validator"
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export class Students extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @IsString()
    @Column('text')
    name: string

    @IsUrl()
    @Column('text')
    picture: string

    @Column('int')
    batchId: number

    @Column('text', {nullable: true})
    color: string

    @Column('text', {nullable: true})
    date: string

    @Column('text', {nullable: true})
    remarks: string
}