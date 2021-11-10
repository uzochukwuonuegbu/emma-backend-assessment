import {
    Column,
    Entity,
    Index,
    ObjectID,
    ObjectIdColumn,
  } from 'typeorm';
  
@Entity()
export class Merchant {
    @ObjectIdColumn()
    @Index({ unique: true })
    public id!: ObjectID;

    @Column()
    public first_name!: string;

    @Column()
    public last_name!: string;
}