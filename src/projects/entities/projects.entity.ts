import { BaseEntity, Column, Entity } from 'typeorm';
import { IProject } from 'src/interfaces/project.interface';

@Entity({ name: 'users' })
export class ProjectsEntity extends BaseEntity implements IProject {
  @Column()
  name: string;
  @Column()
  description: string;
}
