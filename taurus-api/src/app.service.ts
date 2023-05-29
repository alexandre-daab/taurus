import { Injectable } from '@nestjs/common';
import { UserModel } from './user';
import { Lixo } from './lixo/lixo';

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
    const lixo = new Lixo();
    lixo.retornaLixo();
    return { nome: dados.nome, idade: dados.idade };
  }
}
