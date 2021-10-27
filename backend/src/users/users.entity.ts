import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
// import { IsString, IsBoolean, Length, IsOptional, isEmail } from 'class-validator';
import { Field, Int, ObjectType } from '@nestjs/graphql';

/**
 * Entity의 필요성
 *
 * GraphQL에서 Type을 지정하기 위한 작업
 * DB에서 Table Schema를 지정하기 위한 작업
 * 유효성 검사를 위한 작업
 */

@ObjectType() // GraphQL decorator
@Entity('users') // TypeORM decorator
export class Users extends BaseEntity {
  @Field(() => Int) // GraphQL decorator
  @PrimaryGeneratedColumn() // TypeORM decorator
  id: number;

  @Field(() => String) // GraphQL decorator
  @Column({ type: 'varchar', unique: true }) // TypeORM decorator
  user_id: string;

  @Field(() => String)
  @Column({ type: 'varchar' })
  password: string;

  @Field(() => String)
  @Column({ type: 'varchar' })
  nickname: string;

  @Field(() => String)
  @Column({ type: 'varchar' })
  email: string;

  @Field(() => String)
  @Column({ type: 'varchar' })
  profile_path: string;

  @Field(() => String, { defaultValue: 'auth_wait' })
  @Column({ type: 'varchar', default: 'auth_wait' })
  grade: string;

  @Field(() => Date, { defaultValue: new Date() })
  @CreateDateColumn({ type: 'date' })
  created_at: Date;

  @Field(() => Date, { defaultValue: new Date() })
  @UpdateDateColumn({ type: 'date' })
  modified_at: Date;

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ type: 'date' })
  deleted_at?: Date;
}
