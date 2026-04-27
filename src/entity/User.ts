/*
Agora, o sistema precisa de mais segurança. 
Vamos adicionar um campo de e-mail ao usuário, garantindo que ele seja um e-mail válido e único.
Passo a Passo:
Entidade User: Adicione a coluna email na classe User. (que deve ser única)
Validação: Use o decorador @IsEmail() do class-validator no campo de e-mail.
Mensagens: Adicione uma nova mensagem  "O e-mail fornecido não é válido".
Integridade: No UserController.create e UserController.update, antes de salvar, 
verifique se já existe um usuário com esse e-mail. Se existir, lance um BadRequestError informando que o e-mail já está em uso.

*/

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";
import { IsNotEmpty, IsString } from "class-validator";
import { IsEmail } from "class-validator";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  @IsNotEmpty({ message: "Primeiro nome é obrigatório!" })
  @IsString({ message: "Primeiro nome precisa ser um texto" })
  firstName!: string;

  @Column("varchar")
  @IsNotEmpty({ message: "Sobrenome é obrigatório!" })
  @IsString({ message: "Sobrenome precisa ser um texto" })
  lastName!: string;

  @Column({ type: "boolean", default: true })
  isActive!: boolean;
  // Um usuário pode ter muitos posts
  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @Column("varchar", { unique: true })
  @IsNotEmpty({ message: "E-mail é obrigatório!" })
  @IsEmail({}, { message: "O e-mail fornecido não é válido" })
  email!: string;


}