import { IsString, MaxLength, MinLength } from 'class-validator';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Comment } from '../comment';

export interface BlogPostData {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  comments?: Comment[];
}

@Entity('blog_posts')
export class BlogPost extends BaseEntity implements BlogPostData {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  public id!: number;

  @Column({ name: 'content', type: 'text' })
  @IsString()
  @MinLength(3)
  @MaxLength(500)
  public content!: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    nullable: false,
  })
  public createdAt!: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    nullable: false,
  })
  public updatedAt!: Date;

  @OneToMany((_type) => Comment, (comment) => comment.blogPost, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'blog_post_id',
    referencedColumnName: 'blogPostId',
  })
  public comments!: Comment[];
}
