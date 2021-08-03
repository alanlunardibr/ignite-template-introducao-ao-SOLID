import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userExiste = this.usersRepository.findById(user_id);
    if (!userExiste){
      throw new Error("Mensagem do erro");
    }


    return userExiste;
  }
}

export { ShowUserProfileUseCase };
