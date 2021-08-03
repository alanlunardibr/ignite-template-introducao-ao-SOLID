import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userExiste = this.usersRepository.findById(user_id);
    if (!userExiste){
      throw new Error("Mensagem do erro");
    }
    const userAlterado = this.usersRepository.turnAdmin(userExiste);
    return userAlterado;
  }
}

export { TurnUserAdminUseCase };
