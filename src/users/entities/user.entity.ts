import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    length: 100,
    select: false,
    nullable: false,
  })
  password: string;

  @Column({
    length: 100,
  })
  fullName: string;

  @Column({
    type: 'bool',
    default: true,
  })
  isActive: boolean;

  @Column('varchar', {
    array: true,
    default: ['user'],
  })
  roles: string[];

  @CreateDateColumn()
  createdOn: Date;

  @BeforeInsert()
  checkFieldsBeforeInsert() {
    (this.email = this.email.toLowerCase().trim()),
      (this.fullName = this.fullName.toLowerCase().trim());
  }

  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}
