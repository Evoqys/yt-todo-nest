import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {message: 'Hi I am a Object'};
  }
}
