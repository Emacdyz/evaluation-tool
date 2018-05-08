//src/students/entities.ts
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import {IsString, IsUrl} from "class-validator"
import { BaseEntity } from 'typeorm/repository/BaseEntity'
// import { Evaluations }  from "../evaluations/entities";


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

    @Column('int', {nullable: true})
    batchId: number

    // @OneToMany(() => Evaluations, e => e.student)
    // evaluations: Evaluations[]
}