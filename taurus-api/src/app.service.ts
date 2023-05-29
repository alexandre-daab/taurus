import { Injectable } from '@nestjs/common';
import { UserModel } from './user';

const userModel = new UserModel();

export interface Alexa {
  nome: string;
  idade: Number;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getOla(dados: Alexa): Promise<Alexa> {
    await userModel.create();
    return { nome: dados.nome, idade: dados.idade };
  }
}
