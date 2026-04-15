import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import type { Request, Response } from "express";

export class UserController {
  private userRepository = AppDataSource.getRepository(User);
  async create(req: Request, res: Response) {
    try {
      const { firstName, lastName } = req.body;
      const newUser = this.userRepository.create({ firstName, lastName });
      await this.userRepository.save(newUser);
      return res.status(201).json(newUser);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res
        .status(500)
        .json({ error: "Ocorreu um erro inesperado ao criar o usuário." });
    }
  }

  async list(req: Request, res: Response) {
    try {
      const users = await this.userRepository.find();
      return res.json(users);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res
        .status(500)
        .json({ error: "Ocorreu um erro inesperado ao listar os usuários." });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const id  = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "ID inválido." });
      }
      const result = await this.userRepository.delete(id);
      if (result.affected === 0) {
        return res.status(404).json({ error: "Usuário não encontrado." });
      }
      return res.status(204).send();
    }
      catch (error: unknown) {
        if (error instanceof Error) {
          return res.status(400).json({ error: error.message });
        }
        return res
          .status(500)
          .json({ error: "Ocorreu um erro inesperado ao deletar o usuário." });
      }
    }
  }

