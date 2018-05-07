//src/evaluations/entities.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export class Evaluations extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('int', {nullable: true})
    studentId: number

    @Column('text', {nullable: false})
    lastColor: string

    @Column('date', {nullable: false})
    date: string

    @Column('text', {nullable: false})
    remarks: string

    // @Column('json', {nullable: false})
    // colorList: string

    @Column('bool', {default: false, nullable: false})
    questionAsked: boolean
}