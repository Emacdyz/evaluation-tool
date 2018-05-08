//src/evaluations/entities.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsDate } from 'class-validator';

type Color = 'green' | 'yellow' | 'red'

@Entity()
export class Evaluations extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('int', { nullable: false })
    studentId: number

    @Column('int', { nullable: false })
    batchId: number

    @Column('text', {nullable: true})
    color: Color

    @IsDate()
    @Column('date', {nullable: true})
    date: string

    @Column('text', {nullable: true})
    remarks?: string

    // @ManyToOne(() => Students, s => s.evaluations, {onDelete: 'CASCADE'})
    // student: Students

    @Column('bool', {default: false, nullable: true})
    questionAsked: boolean
}