import { BaseEntity, Column, Entity } from 'typeorm';
import { IUSER } from 'src/interfaces/user.interface';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements IUSER {
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  age: number;
  @Column({ unique: true })
  email: string;
  @Column({ unique: true })
  username: string;
  @Column()
  password: string;
  @Column()
  role: string;
}
