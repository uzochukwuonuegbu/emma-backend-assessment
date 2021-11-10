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
    public display_name!: string;

    @Column()
    public icon_url!: string;

    @Column()
    public funny_gif_url!: string;
}