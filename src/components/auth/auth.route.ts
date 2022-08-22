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
    this.router.get(`${this.path}/signup`, this.authController.signup);
    this.router.get(`${this.path}/login`, this.authController.signup);
    this.router.get(`${this.path}/logout`, this.authController.signup);
  }
}

export default AuthRoute;
