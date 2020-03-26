import {Router} from 'express';

const UserController = new Router();

/**
 *  GET users listing.
 */
UserController.get('/', function(req, res, next) {
  res.send([]);
});

export default UserController;
