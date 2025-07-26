import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptorsInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
