import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    ObjectID,
    ObjectIdColumn,
  } from 'typeorm';
import { lowercase } from './utils/ValueTransformers';
  
@Entity()
export class Merchant {
    @ObjectIdColumn()
    public id!: ObjectID;

    @Index({ unique: true })
    @Column({
        nullable: false,
    })
    public user_id!: string;

    @Column()
    public description!: string;

    @Index({ unique: true })
    @Column()
    public merchant_id!: string;

    @Column({
        transformer: [lowercase],
    })
    public icon_url!: string;

    @Column({
        nullable: false,
    })
    public amount!: number;

    @Column()
    @CreateDateColumn()
    public date!: Date;
}