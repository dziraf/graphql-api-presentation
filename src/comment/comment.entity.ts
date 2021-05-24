import {
  IsInt,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { BlogPost } from '../blog-post';

export interface CommentData {
  id: number;
  content: string;
  blogPostId: number;
}

@Entity('comments')
export class Comment extends BaseEntity implements CommentData {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
  public id!: number;

  @Column({ name: 'content', type: 'text', nullable: false })
  @IsString()
  @MinLength(3)
  @MaxLength(500)
  public content!: string;

  @Column({ name: 'blog_post_id', type: 'bigint', nullable: false })
  @IsPositive()
  @IsInt()
  public blogPostId!: number;

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

  @ManyToOne((_type) => BlogPost, (blogPost) => blogPost.comments)
  @JoinColumn({ name: 'blog_post_id' })
  public blogPost!: BlogPost;
}
