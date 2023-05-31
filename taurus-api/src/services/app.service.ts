import { Injectable } from '@nestjs/common';
import { UserModel } from '../modules/user';

const userModel = new UserModel();

export interface Alexa {
  email: string;
  name: string;
}

@Injectable()
export class AppService {
  getHello(key: string): string {
    return key;
  }

  async createUser(dados: Alexa): Promise<Alexa> {
    await userModel.create(dados.email, dados.name);
    return { email: dados.email, name: dados.name };
  }
}
