import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./posts";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  firstName!: string;

  @Column("varchar")
  lastName!: string;

  @Column({ type: "boolean", default: true })
  isActive!: boolean;

  @OneToMany(() => Post, (post) => post.user)
  posts!: Post[];
}
