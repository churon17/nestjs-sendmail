import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userName: string;

    @Column()
    email: string;

    @Column()
    password: string;

}