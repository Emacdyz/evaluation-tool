//src/batches/entities.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export class Batches extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number
    
    @Column('date', {nullable: false})
    startDate: string 
    
    @Column('date', {nullable: false})
    endDate: string
}