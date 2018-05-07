//src/batches/entities.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export class Batches extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('integer', {nullable: true})
    batchNb: number

    @Column('date', {nullable: true})
    startDate: string 

    @Column('date', {nullable: true})
    endDate: string 

}