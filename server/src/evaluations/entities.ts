//src/evaluations/entities.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Students } from '../students/entities';

@Entity()
export class Evaluations extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', {nullable: false})
    color: string

    @Column('date', {nullable: false})
    date: Date

    @Column('text', {nullable: false})
    remarks: string

    // @ManyToOne(() => Students, s => s.evaluations, {onDelete: 'CASCADE'})
    // student: Students

    @Column('bool', {default: false, nullable: false})
    questionAsked: boolean
}