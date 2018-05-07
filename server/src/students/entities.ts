//src/students/entities.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export class Students extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('int', {nullable: true})
    batchNumber: number

    @Column('text', {nullable: true})
    firstName: string

    @Column('text', {nullable: true})
    lastName: string

    @Column('text', {nullable: true})
    picture: string
}