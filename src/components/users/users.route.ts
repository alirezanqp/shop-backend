import { Routes } from '@/routes/routes.interface';
import { Router } from 'express';
import UsersController from './users.controller';

class UsersRoute implements Routes {
  public path = '/users/';
  public router: Router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`);
  }
}

export default UsersRoute;
