import Coupon from '@/components/coupon/interface/coupon.interface';
import User from '@/components/users/interface/users.interface';
import AbstractCouponHandler from '../abstracat.coupon.handler';

class LimitHandelr extends AbstractCouponHandler {
  public process(user: User, coupon: Coupon): Coupon | null {
    if (coupon.used > coupon.limit) {
      throw new Error('این کدتخفیف معتبر نیست');
    }
    return super.process(user, coupon);
  }
}

export default LimitHandelr;
