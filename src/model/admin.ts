import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Admin {
    @PrimaryGeneratedColumn({type: 'int'})
    public id: number;
    @Column({type: 'varchar'})
    public username: string;
    @Column({type: 'varchar'})
    public password: string;
}