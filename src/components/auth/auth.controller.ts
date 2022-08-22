import { NextFunction, Request, Response } from 'express';
import AuthService from './auth.service';
import CreateSignUpDto from './dto/signup.dto';

class AuthController {
  public authService = new AuthService();

  public signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateSignUpDto = req.body;
      const signUpUserData = await this.authService.signup(userData);

      res.send(201).json({ user: signUpUserData, message: 'signup success' });
    } catch (error) {
      next(error);
    }
  };

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateSignUpDto = req.body;
      const { cookie, findUser } = await this.authService.login(userData);

      res.cookie('Authorization', cookie);
      res.send(200).json({ user: findUser, message: 'login success' });
    } catch (error) {
      next(error);
    }
  };

  public logout = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateSignUpDto = req.body;
      const findUser = await this.authService.logout(userData);

      res.cookie('Authorization', '');
      res.send(200).json({ user: findUser, message: 'logout success' });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
