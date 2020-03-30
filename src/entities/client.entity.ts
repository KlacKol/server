import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class Prom {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    date: string;

    @Column()
    text: string;
}