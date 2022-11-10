import Coupon from '@/components/coupon/interface/coupon.interface';
import User from '@/components/users/interface/users.interface';
import CouponHandler from './coupon.handler';

abstract class AbstractCouponHandler implements CouponHandler {
  private nextHandler: CouponHandler;

  public setNext(handler: CouponHandler): CouponHandler {
    this.nextHandler = handler;
    return handler;
  }

  public process(user: User, coupon: Coupon): Coupon | null {
    if (this.nextHandler) {
      return this.nextHandler.process(user, coupon);
    }
    return null;
  }
}

export default AbstractCouponHandler;
