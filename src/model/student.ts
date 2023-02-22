import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Students{
    @PrimaryGeneratedColumn({type: 'int'})
    public id: number;
    @Column({type: 'varchar'})
    public name: string;
    @Column({type: 'varchar'})
    public sex: string;
    @Column({type: 'varchar'})
    public email: string;
    @Column({type: 'varchar'})
    public address: string;
    @Column({type: 'int'})
    public point: number;
}