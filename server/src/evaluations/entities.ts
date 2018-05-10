//src/evaluations/entities.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export class Evaluations extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('int')
    studentId: number

    @Column('text', {nullable: true})
    color: string

    @Column('text', {nullable: true})
    date: string

    @Column('text', {nullable: true})
    remarks: string

    @Column('bool', {default: false, nullable: true})
    questionAsked: boolean
}