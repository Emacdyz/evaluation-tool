//src/batches/entities.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export class Batches extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('int', {nullable: false})
    batchNb: number
    
    @Column('text', {nullable: false})
    startDate: string 
    
    @Column('text', {nullable: false})
    endDate: string
}