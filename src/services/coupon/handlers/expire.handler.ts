import Coupon from '@/components/coupon/interface/coupon.interface';
import User from '@/components/users/interface/users.interface';
import AbstractCouponHandler from '../abstracat.coupon.handler';

class ExpireHandelr extends AbstractCouponHandler {
  public process(user: User, coupon: Coupon): Coupon | null {
    const now = Date.now();
    if (now > coupon.expires_at) {
      throw new Error('مهلت استفاده از این کدتخفیف به پایان رسیده است');
    }
    return super.process(user, coupon);
  }
}

export default ExpireHandelr;
