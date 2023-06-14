import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './modules/user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Get('/a')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/create-user')
  async createUser(): Promise<boolean> {
    return await this.userService.create({
      name: 'guanliyuan',
      desc: 'guanli',
      tel: '121212121',
      account: 'admin',
    });
  }
}
