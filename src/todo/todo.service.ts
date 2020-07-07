import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {

  getTodos() {
    return {
      message: 'Inside todo service'
    };
  }
}
