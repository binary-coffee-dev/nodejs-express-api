import {Controller, Get, Inject} from '../../core';
import {Users} from '../repositories';

@Controller({route: '/users'})
export default class UserController {

  @Inject(Users)
  usersService;

  @Get({route: '/'})
  async users(req, res) {
    const users = await this.usersService.list();
    res.send(users);
  }

  @Get({route: '/hello-world'})
  some(req, res) {
    res.send('hello world!!!');
  }
}
