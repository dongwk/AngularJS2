import {Injectable} from "@angular/core";
import {
  HttpErrorResponse, HttpEvent,
  HttpHandler, HttpHeaderResponse,
  HttpInterceptor, HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent
} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import {SessionHandle} from "../session/session-handle";

@Injectable()
export class HttpResultInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    return next.handle(req).pipe(
      map( evt => {
          if (evt instanceof HttpResponse) {
            if(evt.body && evt.body.code == '200'){
              return evt.clone({
                body: evt.body.data
              });
            } else {
              throw '远程接口返回失败';
            }
          }
      }),
      catchError((err: any) => {
        if(err instanceof HttpErrorResponse) {
          if (err.status == 401) {
            // this.router.navigate(['/index/login']);
          } else if (err.status == 500) {
            // this.notification.create('error', '出错拉', '请求失败,请刷新页面试一试');
          } else if (err.status == 504) {
            // this.notification.create('error', '重要提醒', '你当前的网络不稳定哦！');
          } else {
            // this.message.create('warning', error.error['message']);
            // this.modalService.error({
            //   nzTitle: 'Error',
            //   nzContent: evt.error.message ? evt.error.message : evt.message
            // });
          }
          try {
            // this.toasterService.error(err.error.message, err.error.title, { positionClass: 'toast-bottom-center' });
          } catch(e) {
            // this.toasterService.error('An error occurred', '', { positionClass: 'toast-bottom-center' });
          }
          //log error
        }
        return of(err);
      }));
  }
}
