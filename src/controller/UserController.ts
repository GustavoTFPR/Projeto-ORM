import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { BadRequestError, NotFoundError } from "../helpers/apiError";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";

export class UserController {
  private userRepository = AppDataSource.getRepository(User);

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { firstName, lastName, email } = req.body;

      const existingUser = await this.userRepository.findOneBy({ email });
      if (existingUser) {
        throw new BadRequestError("O e-mail já está em uso.");
      }

      const newUser = this.userRepository.create({ firstName, lastName, email });
      const errors = await validate(newUser);
      if (errors.length > 0) {
        throw new BadRequestError("Falha de validação", errors);
      }

      await this.userRepository.save(newUser);
      return res.status(201).json(newUser);
    } catch (error: unknown) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { firstName, lastName, email } = req.body;

      if (isNaN(Number(id))) {
        throw new BadRequestError("ID inválido.");
      }

      const user = await this.userRepository.findOneBy({ id: Number(id) });
      if (!user) {
        throw new NotFoundError("Usuário não encontrado.");
      }

      if (email && email !== user.email) {
        const existingUser = await this.userRepository.findOneBy({ email });
        if (existingUser) {
          throw new BadRequestError("O e-mail já está em uso.");
        }
        user.email = email;
      }

      if (firstName) user.firstName = firstName;
      if (lastName) user.lastName = lastName;

      const errors = await validate(user);
      if (errors.length > 0) {
        throw new BadRequestError("Falha de validação", errors);
      }

      const updatedUser = await this.userRepository.save(user);
      return res.status(200).json(updatedUser);
    } catch (error: unknown) {
      next(error);
    }
  };
}