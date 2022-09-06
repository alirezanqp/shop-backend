import { Routes } from '@/routes/routes.interface';
import { Router } from 'express';
import AuthController from './auth.controller';

class AuthRoute implements Routes {
  public path = '/auth';
  public router: Router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/signup`, this.authController.signup);
    this.router.post(`${this.path}/login`, this.authController.login);
    this.router.post(`${this.path}/logout`, this.authController.logout);
  }
}

export default AuthRoute;
