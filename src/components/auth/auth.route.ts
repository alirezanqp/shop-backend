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
    /**
     * @swagger
     * /auth/signup:
     *   post:
     *     tags:
     *      - auth
     *     description: signup user
     *     parameters:
     *       - name: body
     *         in: body
     *         description: user Data
     *         required: true
     *         schema:
     *          $ref: '#/definitions/users'
     *     responses:
     *       200:
     *         description: sucsess signup.
     *       401:
     *         description: user is allerdy!
     */

    this.router.post(`${this.path}/signup`, this.authController.signup);
    /**
     * @swagger
     * /auth/login:
     *   post:
     *     tags:
     *      - auth
     *     description: user login
     *     responses:
     *       200:
     *         description: user logined.
     *       404:
     *         description: user not found!
     */

    this.router.post(`${this.path}/login`, this.authController.login);
    this.router.post(`${this.path}/logout`, this.authController.logout);
  }
}

export default AuthRoute;
