import {Controller, Get, Inject} from '../../core';
import {UsersService} from '../services';

@Controller({route: '/users'})
export class UserController {

  @Inject(UsersService)
  usersService;

  @Get({route: '/'})
  users(req, res) {
    res.send(this.usersService.getUsers());
  }

  @Get({route: '/hello-world'})
  some(req, res) {
    res.send('hello world!!!');
  }
}
